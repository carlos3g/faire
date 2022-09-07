import { FC } from 'react';

import { Ionicons } from '@expo/vector-icons';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

import { Account, Tasks } from '@screens';
import { colors, typography } from '@styles';
import { TabsParams } from '@types';

type ScreenOptions = (props: {
  route: RouteProp<TabsParams>;
}) => BottomTabNavigationOptions;

type TabBarIcons = {
  [screenName: string]: {
    onFocusIcon: keyof typeof Ionicons.glyphMap;
    onBlurIcon: keyof typeof Ionicons.glyphMap;
  };
};

const icons: TabBarIcons = {
  Tasks: {
    onFocusIcon: 'checkmark-done-circle',
    onBlurIcon: 'checkmark-done-circle-outline',
  },
  Account: {
    onFocusIcon: 'person-circle',
    onBlurIcon: 'person-circle-outline',
  },
};

const options: ScreenOptions = ({ route }) => ({
  headerStyle: { backgroundColor: colors.background },
  headerTitleAlign: 'center',
  headerShadowVisible: false,
  headerTitleStyle: {
    fontFamily: typography.headerTitle.fontFamily,
    fontSize: typography.headerTitle.fontSize,
    lineHeight: typography.headerTitle.lineHeight,
  },
  tabBarShowLabel: false,
  tabBarIcon: ({ color, focused, size }) => {
    const { onFocusIcon, onBlurIcon } = icons[route.name];
    const iconName = focused ? onFocusIcon : onBlurIcon;

    return <Ionicons name={iconName} color={color} size={size} />;
  },
});

const { Navigator, Screen } = createBottomTabNavigator<TabsParams>();

const AppNavigator: FC = () => (
  <Navigator screenOptions={options}>
    <Screen component={Tasks} name="Tasks" options={{ title: 'Tarefas' }} />
    <Screen component={Account} name="Account" />
  </Navigator>
);

export default AppNavigator;
