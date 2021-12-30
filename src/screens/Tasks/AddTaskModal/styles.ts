import { colors, typography } from '@styles';
import { tint } from 'polished';
import styled from 'styled-components/native';

export const Overlay = styled.Pressable`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
`;

export const Content = styled.View`
  position: absolute;
  bottom: 0;
  background-color: ${tint(0.1, colors.background)};
  padding: 16px;
  aspect-ratio: 1.3;
  width: 100%;
`;

export const Title = styled.Text`
  font-family: ${typography.subtitle.fontFamily};
  font-size: ${typography.subtitle.fontSize}px;
  line-height: ${typography.subtitle.lineHeight}px;
  color: ${colors.text};
  margin-bottom: 10px;
`;
