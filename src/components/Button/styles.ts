import { colors, typography } from '@styles';
import { Pressable } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(Pressable)`
  align-items: center;
  justify-content: center;
  background-color: ${colors.text};
  border-radius: 15px;
  width: 100%;
  aspect-ratio: 6.06;
`;

export const Label = styled.Text`
  font-family: ${typography.button.fontFamily};
  font-size: ${typography.button.fontSize}px;
  line-height: ${typography.button.lineHeight}px;
  color: ${colors.background};
`;
