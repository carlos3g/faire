import { User } from 'firebase/auth';

export type AuthStackParams = {
  Onboard: undefined;
  Login: undefined;
  SignUp: undefined;
  TabsNavigator: undefined;
};

export type TabsParams = {
  Account: undefined;
  Tasks: undefined;
};

export interface ITask {
  id: string;
  priority: 0 | 1 | 2;
  title: string;
}

export type IUser = User | null;
