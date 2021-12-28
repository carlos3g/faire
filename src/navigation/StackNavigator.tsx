import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabsNavigator from './BottomTabNavigator';
import { Onboard, Login, SignUp } from '@screens';
import { RootStackParamList } from '@types';
import { colors } from '@styles';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  const isLoggedIn: boolean = true;

  return (
    <Navigator
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: { backgroundColor: colors.background },
        headerShadowVisible: false,
        title: '',
      }}
    >
      {isLoggedIn ? (
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
