import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '@types';
import { Button, Input } from '@components';
import { Container, Title, SubTitle, SignUpText, Text } from './styles';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { navigate } = useNavigation<LoginScreenNavigationProp>();

  function handleLogin(): void {
    console.log(email);
    console.log(password);
  }

  return (
    <Container>
      <Title>Bem vindo de volta!</Title>
      <SubTitle>É bom te rever.</SubTitle>

      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginTop: 10, marginBottom: 60 }}
      />

      <Button
        label="Entrar"
        onPress={handleLogin}
        style={{ marginBottom: 10 }}
      />
      <Text>
        Não tem uma conta?{' '}
        <SignUpText onPress={() => navigate('SignUp')}>
          Crie uma aqui
        </SignUpText>
      </Text>
    </Container>
  );
}

export default Login;
