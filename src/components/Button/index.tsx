import { PressableProps } from 'react-native';
import { Container, Label } from './styles';

interface IButtonProps extends PressableProps {
  label: string;
}

function Button({ label, ...rest }: IButtonProps): JSX.Element {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
    </Container>
  );
}

export default Button;
