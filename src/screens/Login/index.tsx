import { Button, Input } from '@components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { auth } from '@services';
import { RootStackParamList } from '@types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback, useState } from 'react';
import { Container, SignUpText, SubTitle, Text, Title } from './styles';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { navigate } = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = useCallback(() => {
    signInWithEmailAndPassword(auth, email, password);
  }, [auth, email, password]);

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
