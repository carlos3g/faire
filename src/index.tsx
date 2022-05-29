import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
} from '@expo-google-fonts/poppins';
import { RootNavigator } from '@navigation';
import { AuthProvider } from '@providers';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { FC, useEffect } from 'react';

const Main: FC = () => {
  const [fontsLoaded] = useFonts({
    poppinsRegular: Poppins_400Regular,
    poppinsMedium: Poppins_500Medium,
    poppinsSemiBold: Poppins_600SemiBold,
  });

  useEffect(() => {
    async function fetchResources() {
      if (!fontsLoaded) {
        return SplashScreen.preventAutoHideAsync();
      }

      return SplashScreen.hideAsync();
    }

    fetchResources().catch(() => undefined);
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <RootNavigator />
      <StatusBar translucent style="light" />
    </AuthProvider>
  );
};

export default Main;
