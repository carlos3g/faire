import styled from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '@styles';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.background};
`;

export const Divider = styled.View`
  height: 4px;
`;

export const Fab = styled.Pressable`
  position: absolute;
  bottom: 16px;
  right: 16px;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  border-radius: 28px;
  height: 56px;
  width: 56px;
  overflow: hidden;
`;

export const AddIcon = styled(Ionicons).attrs({
  color: colors.background,
  name: 'add',
  size: 34,
})``;
