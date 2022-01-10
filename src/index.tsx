import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { RootNavigator } from '@navigation';
import { AuthProvider } from '@providers';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';

const Main: FC = () => {
  const [fontsLoaded] = useFonts({
    poppinsRegular: Poppins_400Regular,
    poppinsMedium: Poppins_500Medium,
    poppinsSemiBold: Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <RootNavigator />
      <StatusBar translucent style="light" />
    </AuthProvider>
  );
};

export default Main;
