import styled from 'styled-components/native';

export const Container = styled.View`
  padding-right: 6px;
  padding-left: 6px;
  padding-bottom: 10px;
  padding-top: 2px;
`;

export const Card = styled.View`
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-left-width: 4px;
  border-left-color: #1a2c49;
  shadow-color: #000;
  shadow-opacity: 0.05;
  shadow-radius: 4px;
  elevation: 2;
`;

export const TextsContainer = styled.ScrollView`
  flex: 1;
  margin-right: 10px;
`;

export const Title = styled.Text`
  color: #1a2c49;
  font-size: 18px;
`;

export const Description = styled.Text`
  color: #555;
  font-size: 16px;
`;
