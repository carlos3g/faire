import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Account, Tasks } from '@screens';
import { colors, typography } from '@styles';
import { TabsParamList } from '@types';
import { Ionicons } from '@expo/vector-icons';
import { tint } from 'polished';

type TabBarIcons = {
  [screenName: string]: {
    lib: typeof Ionicons;
    onFocusIcon: keyof typeof Ionicons.glyphMap;
    onBlurIcon: keyof typeof Ionicons.glyphMap;
  };
};

const icons: TabBarIcons = {
  Tasks: {
    lib: Ionicons,
    onFocusIcon: 'checkmark-done-circle',
    onBlurIcon: 'checkmark-done-circle-outline',
  },
  Account: {
    lib: Ionicons,
    onFocusIcon: 'person-circle',
    onBlurIcon: 'person-circle-outline',
  },
};

const { Navigator, Screen } = createBottomTabNavigator<TabsParamList>();

function BottomTabsNavigator() {
  return (
    <Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        tabBarStyle: {
          backgroundColor: tint(0.1, colors.background),
          borderTopWidth: 0,
        },
        tabBarIcon: ({ color, focused, size }) => {
          const { lib: Icon, onFocusIcon, onBlurIcon } = icons[route.name];
          const iconName = focused ? onFocusIcon : onBlurIcon;

          return <Icon name={iconName} color={color} size={size} />;
        },
        headerStyle: { backgroundColor: colors.background },
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: colors.text,
          fontFamily: typography.headerTitle.fontFamily,
          fontSize: typography.headerTitle.fontSize,
          lineHeight: typography.headerTitle.lineHeight,
        },
        headerShadowVisible: false,
      })}
    >
      <Screen component={Tasks} name="Tasks" options={{ title: 'Tarefas' }} />
      <Screen component={Account} name="Account" />
    </Navigator>
  );
}

export default BottomTabsNavigator;
