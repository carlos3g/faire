import { Button, Input } from '@components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { auth } from '@services';
import { RootStackParamList } from '@types';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useCallback, useState } from 'react';
import { Container, LoginText, SubTitle, Text, Title } from './styles';

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

function SignUp() {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { navigate } = useNavigation<SignUpScreenNavigationProp>();

  const handleSignUp = useCallback(() => {
    createUserWithEmailAndPassword(auth, email, password);
  }, [auth, email, password]);

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
}

export default SignUp;
