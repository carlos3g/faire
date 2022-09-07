import { FC } from 'react';
import { PressableProps } from 'react-native';

import { Container, Label } from './styles';

interface IButtonProps extends PressableProps {
  label: string;
}

const Button: FC<IButtonProps> = ({ label, ...rest }) => (
  <Container {...rest}>
    <Label>{label}</Label>
  </Container>
);

export default Button;
