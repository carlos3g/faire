import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login, Onboard, SignUp } from '@screens';
import { auth } from '@services';
import { colors } from '@styles';
import { RootStackParamList } from '@types';
import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect } from 'react';
import { AuthContext } from '@providers';
import BottomTabsNavigator from './BottomTabNavigator';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  const { user, setUser } = useContext(AuthContext);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (aUser) => {
      aUser ? setUser(aUser) : setUser(null);
    });

    return unsubscribe;
  }, [user]);

  return (
    <Navigator
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: { backgroundColor: colors.background },
        headerShadowVisible: false,
        title: '',
      }}
    >
      {user ? (
        <Screen
          component={BottomTabsNavigator}
          name="TabsNavigator"
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Screen
            component={Onboard}
            name="Onboard"
            options={{ headerShown: false }}
          />
          <Screen component={Login} name="Login" />
          <Screen component={SignUp} name="SignUp" />
        </>
      )}
    </Navigator>
  );
}

export default StackNavigator;
