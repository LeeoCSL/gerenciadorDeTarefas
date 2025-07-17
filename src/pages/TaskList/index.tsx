import { StackScreenProps } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

import Button from '../../components/Button/Button';
import TaskItem from '../../components/TaskItem/TaskItem';
import { useTasks } from '../../contexts/TaskContext';

import { Container, Scroll, NoTasksText } from './styled';

import { RootStackParamList } from '../../navigation/navigation';

type Props = StackScreenProps<RootStackParamList, 'TaskList'>;

function TaskList({ navigation }: Props) {
  const { tasks, toggleCompleted, handleCleanCompleted } = useTasks();

  function handleCompleted(itemId: number) {
    toggleCompleted(itemId);
  }

  return (
    <Container>
      <Button
        text="Nova Tarefa"
        onPress={() => {
          navigation.navigate('AddTask');
        }}
      >
        <Icon
          name="plus"
          type="font-awesome"
          color="#fff"
          size={15}
          iconStyle={{ marginRight: 10 }}
        />
      </Button>
      <Scroll>
        {!tasks.length && (
          <NoTasksText>Você não tem tarefas cadastradas!</NoTasksText>
        )}

        {tasks.map(task => (
          <TaskItem
            key={task.id}
            item={task}
            handleCompleted={handleCompleted}
          />
        ))}
      </Scroll>

      <Button
        text="Limpar Concluídas"
        onPress={() => {
          handleCleanCompleted();
        }}
      />
    </Container>
  );
}

export default TaskList;
