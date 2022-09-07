import { TextInputProps } from 'react-native';

import styled from 'styled-components/native';
import { shade, tint } from 'polished';

import { colors, typography } from '@styles';

interface IStyledTextInputProps {
  focused?: boolean;
}

export const StyledTextInput = styled.TextInput.attrs(
  (): TextInputProps => ({
    placeholderTextColor: shade(0.4, colors.text),
    selectionColor: colors.primary,
    textAlign: 'left',
  })
)<IStyledTextInputProps>`
  font-family: ${typography.text.fontFamily};
  font-size: ${typography.text.fontSize}px;
  line-height: ${typography.text.lineHeight}px;
  color: ${colors.text};
  background-color: ${tint(0.1, colors.background)};
  border-radius: 12px;
  border: 1px solid
    ${({ focused }) => tint(0.2, focused ? colors.primary : colors.background)};
  padding-left: 16px;
  width: 100%;
  aspect-ratio: 6.06;
`;
