import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useMemo,
  useState,
} from 'react';

import { IUser } from '@types';

interface IAuthContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => undefined,
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<IUser>(null);
  const values = useMemo(() => ({ user, setUser }), [user]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
