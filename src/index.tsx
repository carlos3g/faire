import { StatusBar } from 'expo-status-bar';
import Navigation from '@navigation';

function Main() {
  return (
    <>
      <Navigation />
      <StatusBar translucent style="light" />
    </>
  );
}

export default Main;
