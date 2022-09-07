import { FC } from 'react';

import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { AuthStackParams } from '@types';
import { Button, Container, Label } from './styles';

type NavigationProp = NativeStackNavigationProp<AuthStackParams, 'Onboard'>;

const NavigationButtons: FC = () => {
  const { navigate } = useNavigation<NavigationProp>();

  return (
    <Container>
      <Button primary onPress={() => navigate('SignUp')}>
        <Label primary>Cadastrar</Label>
      </Button>
      <Button onPress={() => navigate('Login')}>
        <Label>Entrar</Label>
      </Button>
    </Container>
  );
};

export default NavigationButtons;
