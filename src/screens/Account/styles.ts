import styled from 'styled-components/native';

import { colors, typography } from '@styles';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 32px;
  background-color: ${colors.background};
`;

export const Text = styled.Text`
  font-family: ${typography.text.fontFamily};
  font-size: ${typography.text.fontSize}px;
  line-height: ${typography.text.lineHeight}px;
  color: ${colors.text};
`;
