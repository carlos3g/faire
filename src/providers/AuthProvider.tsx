/* eslint-disable react/jsx-no-constructed-context-values */
import { User } from 'firebase/auth';
import { createContext, Dispatch, FC, useState, SetStateAction } from 'react';

type IUser = User | null;
interface IAuthContext {
  user: IUser;
  setUser: Dispatch<SetStateAction<IUser>>;
}

const AuthContext = createContext<IAuthContext>({
  user: null,
  setUser: () => undefined,
});

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
