import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Onboard, Login, SignUp } from '@screens';
import { RootStackParamList } from '@types';
import { colors } from '@styles';

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

function StackNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerTintColor: colors.text,
        headerStyle: { backgroundColor: colors.background },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 20,
        },
        headerShadowVisible: false,
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
}

export default StackNavigator;
