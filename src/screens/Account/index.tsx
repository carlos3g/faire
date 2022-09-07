import { FC, useCallback } from 'react';

import { auth } from '@services';
import { signOut } from 'firebase/auth';

import { Button } from '@components';
import { Container } from './styles';

const Account: FC = () => {
  const handleLogout = useCallback(async () => {
    await signOut(auth);
  }, []);

  return (
    <Container>
      <Button onPress={handleLogout} label="Log out" />
    </Container>
  );
};

export default Account;
