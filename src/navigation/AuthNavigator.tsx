import { FC } from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login, Onboard, SignUp } from '@screens';
import { colors } from '@styles';
import { AuthStackParams } from '@types';

const { Navigator, Screen } = createNativeStackNavigator<AuthStackParams>();

const AuthNavigator: FC = () => (
  <Navigator
    screenOptions={{
      headerStyle: { backgroundColor: colors.background },
      headerShadowVisible: false,
      title: '',
    }}
  >
    <Screen
      component={Onboard}
      name="Onboard"
      options={{ headerShown: false }}
    />
    <Screen component={Login} name="Login" />
    <Screen component={SignUp} name="SignUp" />
  </Navigator>
);

export default AuthNavigator;
