import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ccc;
`;

export const Card = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  elevation: 2;
  shadow-color: #000;
  margin: 20px;
  height: 350px;
`;

export const InputName = styled.TextInput`
  background-color: #fff;
  margin-bottom: 0;
  border-radius: 5px;
  font-size: 16px;
  height: 55px;
  width: 100%;
  align-self: flex-start;
  border-width: 1px;
  border-color: #ccc;
  color: #000;
  padding-horizontal: 10px;
`;

export const ContainerButton = styled.View`
  width: 60%;
  background-color: #0000;
  margin-top: 20px;
  border-radius: 5px;
  align-content: center;
  align-items: center;
  align-self: center;
`;
