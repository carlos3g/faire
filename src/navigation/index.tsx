import { AuthContext } from '@providers';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { auth } from '@services';
import { colors } from '@styles';
import { onAuthStateChanged } from 'firebase/auth';
import { tint } from 'polished';
import { useContext, useEffect } from 'react';
import AppNavigator from './AppNavigator';
import AuthNavigator from './AuthNavigator';

const NavigationTheme: Theme = {
  dark: true,
  colors: {
    primary: colors.primary,
    background: colors.background,
    card: tint(0.1, colors.background),
    text: colors.text,
    border: 'transparent',
    notification: colors.primary,
  },
};

function RootNavigator() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u ? u : null)), []);

  return (
    <NavigationContainer theme={NavigationTheme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}

export { RootNavigator };
