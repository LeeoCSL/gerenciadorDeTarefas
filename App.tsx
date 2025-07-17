import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { TaskProvider } from './src/contexts/TaskContext';
function App() {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
}

export default App;
