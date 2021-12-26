import styled from 'styled-components/native';
import { ScrollViewProps, ImageProps } from 'react-native';
import { colors, typography } from '@styles';
import { shade } from 'polished';

export const Container = styled.ScrollView.attrs(
  (): ScrollViewProps => ({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      justifyContent: 'flex-end',
      alignItems: 'center',
      flex: 1,
    },
  })
)`
  flex: 1;
  background-color: ${colors.background};
  padding: 0 32px 16px 32px;
`;

export const Banner = styled.Image.attrs(
  (): ImageProps => ({
    source: require('@assets/images/banner.png'),
    resizeMode: 'contain',
  })
)`
  width: 100%;
  margin-bottom: 20px;
  aspect-ratio: 1.81;
`;

export const Title = styled.Text`
  font-family: ${typography.title.fontFamily};
  font-size: ${typography.title.fontSize}px;
  line-height: ${typography.title.lineHeight}px;
  text-align: center;
  color: ${colors.text};
  margin-bottom: 20px;
  width: 100%;
`;

export const Text = styled.Text`
  font-family: ${typography.text.fontFamily};
  font-size: ${typography.text.fontSize}px;
  line-height: ${typography.text.lineHeight}px;
  color: ${shade(0.5, colors.text)};
  width: 100%;
`;
