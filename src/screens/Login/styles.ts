import { KeyboardAvoidingViewProps } from 'react-native';

import { shade } from 'polished';
import styled from 'styled-components/native';

import { colors, typography } from '@styles';

export const Container = styled.KeyboardAvoidingView.attrs(
  (): KeyboardAvoidingViewProps => ({
    enabled: true,
    behavior: 'position',
    keyboardVerticalOffset: -64,
  })
)`
  flex: 1;
  background-color: ${colors.background};
  padding: 40px 32px 0 32px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${typography.title.fontFamily};
  font-size: ${typography.title.fontSize}px;
  line-height: ${typography.title.lineHeight}px;
  color: ${colors.text};
  width: 100%;
`;

export const SubTitle = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  line-height: ${typography.subtitle.lineHeight}px;
  color: ${colors.text};
  margin: 5px 0 40px 0;
  width: 100%;
`;

export const Text = styled.Text`
  font-family: ${typography.text.fontFamily};
  font-size: ${typography.text.fontSize}px;
  line-height: ${typography.text.lineHeight}px;
  color: ${shade(0.4, colors.text)};
`;

export const SignUpText = styled.Text`
  font-family: poppinsSemiBold;
`;
