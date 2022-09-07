import { FC, useCallback, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { Button, Input } from '@components';
import { auth } from '@services';
import { AuthStackParams } from '@types';
import { Container, SignUpText, SubTitle, Text, Title } from './styles';

type LoginProps = NativeStackScreenProps<AuthStackParams, 'Login'>;

const Login: FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = navigation;

  const handleLogin = useCallback(async () => {
    await signInWithEmailAndPassword(auth, email, password);
  }, [email, password]);

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
};

export default Login;
