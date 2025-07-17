import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import TaskList from '../pages/TaskList';
import AddTask from '../pages/AddTask';
import { RootStackParamList } from './navigation';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen
          name="TaskList"
          options={{
            title: 'Lista de tarefas',
            headerStyle: {
              backgroundColor: '#1A2C49',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={TaskList}
        />
        <Stack.Screen
          name="AddTask"
          options={{
            title: 'Adicionar Tarefa',
            headerStyle: {
              backgroundColor: '#1A2C49',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
          component={AddTask}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
