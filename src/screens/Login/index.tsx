import { Button, Input } from '@components';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { auth } from '@services';
import { AuthStackParams } from '@types';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useCallback, useState } from 'react';
import { Container, SignUpText, SubTitle, Text, Title } from './styles';

type Props = NativeStackScreenProps<AuthStackParams, 'Login'>;

function Login({ navigation }: Props) {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { navigate } = navigation;

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
