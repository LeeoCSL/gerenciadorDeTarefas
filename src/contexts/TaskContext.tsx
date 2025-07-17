import React, {
  createContext,
  useState,
  ReactNode,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Task = {
  id: number;
  title: string;
  description: string;
  completed: boolean;
};

type TaskContextType = {
  tasks: Task[];
  addTask: (title: string, description: string) => void;
  toggleCompleted: (id: number) => void;
  handleCleanCompleted: () => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

const ASYNC_TASKS_KEY = '@tasks';
const ASYNC_ID_KEY = '@next_id';

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [nextId, setNextId] = useState<number>(1);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      const asyncTasks = await AsyncStorage.getItem(ASYNC_TASKS_KEY);
      const asyncId = await AsyncStorage.getItem(ASYNC_ID_KEY);

      if (asyncTasks) {
        setTasks(JSON.parse(asyncTasks));
      }

      if (asyncId) {
        setNextId(Number(asyncId));
      }

      setLoaded(true);
    };

    loadData();
  }, []);

  useEffect(() => {
    if (!loaded) return;
    AsyncStorage.setItem(ASYNC_ID_KEY, String(nextId));
    if (nextId > 1) {
    }
  }, [nextId, loaded]);

  useEffect(() => {
    AsyncStorage.setItem(ASYNC_TASKS_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title: string, description: string) => {
    const newTask: Task = {
      id: nextId,
      title,
      description,
      completed: false,
    };

    setTasks(prev => [...prev, newTask]);
    setNextId(prev => prev + 1);
  };

  const toggleCompleted = (itemId: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === itemId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleCleanCompleted = () => {
    setTasks(prev => prev.filter(task => !task.completed));
  };

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, toggleCompleted, handleCleanCompleted }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = (): TaskContextType => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('...');
  }
  return context;
};
