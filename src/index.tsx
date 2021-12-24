import { StatusBar } from 'expo-status-bar';
import { Home } from '@screens';

function Main() {
  return (
    <>
      <Home />
      <StatusBar translucent style="light" />
    </>
  );
}

export default Main;
