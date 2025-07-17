/* eslint-disable react-native/no-inline-styles */
import { useState } from 'react';
import { Alert } from 'react-native';
import Textarea from 'react-native-textarea';

import { Container, Card, InputName, ContainerButton } from './styled';

import Button from '../../components/Button/Button';
import { useTasks } from '../../contexts/TaskContext';

function AddTask() {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const { addTask } = useTasks();

  const validateFields = () => {
    if (taskName.trim() === '') {
      Alert.alert('Erro', 'Por favor, defina o nome da tarefa');
      return false;
    } else if (taskDescription.trim() === '') {
      Alert.alert('Erro', 'Por favor, defina a descrição da tarefa');
      return false;
    } else {
      return true;
    }
  };

  function handleCreateTask() {
    if (!validateFields()) {
      return;
    }
    addTask(taskName.trim(), taskDescription.trim());
    setTaskName('');
    setTaskDescription('');
  }

  return (
    <Container>
      <Card>
        <InputName
          placeholder={'Nome da tarefa'}
          placeholderTextColor="#afafaf"
          onChangeText={setTaskName}
          value={taskName}
        />

        <Textarea
          placeholder={'Descrição da tarefa'}
          placeholderTextColor={'#afafaf'}
          onChangeText={setTaskDescription}
          value={taskDescription}
          containerStyle={{
            height: 150,
            padding: 8,
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#ccc',
            marginTop: 20,
          }}
          style={{
            fontSize: 16,
            padding: 8,
            backgroundColor: '#fff',
            borderRadius: 5,
            color: '#000',
          }}
        />

        <ContainerButton>
          <Button
            text="Adicionar Tarefa"
            onPress={() => {
              handleCreateTask();
            }}
          />
        </ContainerButton>
      </Card>
    </Container>
  );
}

export default AddTask;
