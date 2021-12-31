export type RootStackParamList = {
  Onboard: undefined;
  Login: undefined;
  SignUp: undefined;
  TabsNavigator: undefined;
};

export type TabsParamList = {
  Account: undefined;
  Tasks: undefined;
};

export interface ITask {
  id: string;
  priority: 0 | 1 | 2;
  title: string;
}
