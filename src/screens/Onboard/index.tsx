import { Container, Banner, Title, Text } from './styles';
import NavigationButtons from './NavigationButtons';

function Onboard() {
  return (
    <Container>
      <Banner />
      <Title>Organize sua vida e seu trabalho</Title>
      <Text>
        Crie tarefas diversas para organizar sua rotina e nunca mais se perda
        novamente.
      </Text>
      <NavigationButtons />
    </Container>
  );
}

export default Onboard;
