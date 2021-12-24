import styled from 'styled-components/native';
import { colors } from '@styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${colors.text};
`;
