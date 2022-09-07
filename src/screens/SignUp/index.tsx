import { FC, useCallback, useState } from 'react';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { Button, Input } from '@components';
import { auth } from '@services';
import { AuthStackParams } from '@types';
import { Container, LoginText, SubTitle, Text, Title } from './styles';

type SignUpProps = NativeStackScreenProps<AuthStackParams, 'SignUp'>;

const SignUp: FC<SignUpProps> = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { navigate } = navigation;

  const handleSignUp = useCallback(async () => {
    await createUserWithEmailAndPassword(auth, email, password);
  }, [email, password]);

  return (
    <Container>
      <Title>Bem vindo!</Title>
      <SubTitle>É ótimo te ver aqui.</SubTitle>

      <Input placeholder="Nome" value={nome} onChangeText={setNome} />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ marginTop: 10, marginBottom: 10 }}
      />
      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        style={{ marginBottom: 60 }}
      />

      <Button
        label="Cadastrar"
        onPress={handleSignUp}
        style={{ marginBottom: 10 }}
      />
      <Text>
        Já tem uma conta?{' '}
        <LoginText onPress={() => navigate('Login')}>Entre aqui</LoginText>
      </Text>
    </Container>
  );
};

export default SignUp;
