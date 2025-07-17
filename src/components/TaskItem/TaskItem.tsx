import React from 'react';
import { CheckBox, Icon } from 'react-native-elements';

import { Container, Card, TextsContainer, Title, Description } from './styles';

interface TaskItemProps {
  item: {
    id: number;
    title: string;
    description: string;
    completed: boolean;
  };
  handleCompleted: (item: any) => void;
}

function TaskItem({ item, handleCompleted }: TaskItemProps) {
  return (
    <Container>
      <Card>
        <TextsContainer>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </TextsContainer>
        <CheckBox
          checkedColor={'#000'}
          checked={item.completed}
          onPress={() => {
            handleCompleted(item.id);
          }}
          iconType="font-awesome"
          checkedIcon={
            <Icon
              name="check-square-o"
              type="font-awesome"
              color="#1A2C49"
              size={25}
              iconStyle={{ marginRight: 10 }}
            />
          }
          uncheckedIcon={
            <Icon
              name="square-o"
              type="font-awesome"
              color="grey"
              size={25}
              iconStyle={{ marginRight: 10 }}
            />
          }
        />
      </Card>
    </Container>
  );
}

export default TaskItem;
