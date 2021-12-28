import { useState } from 'react';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { Container, Title, SubTitle, LoginText, Text } from './styles';
import { Button, Input } from '@components';
import { RootStackParamList } from '@types';

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignUp'
>;

function SignUp() {
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const { navigate } = useNavigation<SignUpScreenNavigationProp>();

  function handleSignUp(): void {
    console.log(nome);
    console.log(email);
    console.log(password);
  }

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
