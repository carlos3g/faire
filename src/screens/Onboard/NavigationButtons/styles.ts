import styled from 'styled-components/native';
import { tint } from 'polished';

import { colors, typography } from '@styles';

type ButtonProps = { primary?: boolean };
type LabelProps = { primary?: boolean };

export const Container = styled.View`
  flex-direction: row;
  aspect-ratio: 5.6;
  width: 100%;
  border-radius: 16.25px;
  background-color: ${tint(0.1, colors.background)};
  overflow: hidden;
  margin-top: 20%;
`;

export const Button = styled.Pressable<ButtonProps>`
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100%;
  border-radius: 16.25px;
  background-color: ${({ primary }) => (primary ? colors.text : 'transparent')};
`;

export const Label = styled.Text<LabelProps>`
  font-family: ${typography.button.fontFamily};
  font-size: ${typography.button.fontSize}px;
  line-height: ${typography.button.lineHeight}px;
  color: ${({ primary }) => (primary ? colors.background : colors.text)};
`;
