import { createContext, FC, useState } from 'react';

const AuthContext = createContext<any>(null);

const AuthProvider: FC = ({ children }) => {
  const [user, setUser] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
