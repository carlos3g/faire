import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Container, Button, Label } from './styles';
import { RootStackParamList } from '@types';

type OnboardScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Onboard'
>;

function NavigationButtons() {
  const { navigate } = useNavigation<OnboardScreenNavigationProp>();

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
}

export default NavigationButtons;
