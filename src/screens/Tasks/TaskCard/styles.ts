import { TextProps } from 'react-native';

import { shade, tint } from 'polished';
import styled from 'styled-components/native';

import { colors, typography } from '@styles';

type PriorityIndicatorProps = {
  level: number;
};

const priorityColors: { [name: number]: string } = {
  0: colors.green,
  1: colors.yellow,
  2: colors.red,
};

export const Container = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: ${tint(0.1, colors.background)};
  border-radius: 8px;
  padding-left: 8px;
  aspect-ratio: 8.6;
  width: 100%;
  overflow: hidden;
`;

export const CheckBox = styled.Pressable`
  border: 2px solid ${tint(0.2, colors.background)};
  border-radius: 16px;
  aspect-ratio: 1;
  height: 57%;
`;

export const Title = styled.Text.attrs(
  (): TextProps => ({
    numberOfLines: 1,
    style: {
      includeFontPadding: false,
      textAlignVertical: 'center',
    },
  })
)`
  flex: 1;
  font-family: ${typography.text.fontFamily};
  font-size: ${typography.text.fontSize}px;
  line-height: ${typography.text.lineHeight}px;
  color: ${shade(0.4, colors.text)};
  margin-left: 15px;
`;

export const PriorityIndicator = styled.View<PriorityIndicatorProps>`
  background-color: ${({ level }) => priorityColors[level]};
  height: 100%;
  width: 4px;
`;
