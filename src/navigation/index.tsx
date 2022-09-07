import { FC, useContext, useEffect } from 'react';

import { NavigationContainer, Theme } from '@react-navigation/native';
import { onAuthStateChanged } from 'firebase/auth';
import { tint } from 'polished';

import { AuthContext } from '@providers';
import { auth } from '@services';
import { colors } from '@styles';
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

const RootNavigator: FC = () => {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => onAuthStateChanged(auth, (u) => setUser(u)), [setUser]);

  return (
    <NavigationContainer theme={NavigationTheme}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export { RootNavigator };
