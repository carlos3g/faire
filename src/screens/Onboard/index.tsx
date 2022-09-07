import { FC } from 'react';

import NavigationButtons from './NavigationButtons';
import { Banner, Container, Text, Title } from './styles';

const Onboard: FC = () => (
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

export default Onboard;
