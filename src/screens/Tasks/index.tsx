import { AuthContext } from '@providers';
import { db } from '@services';
import { ITask } from '@types';
import { collection, onSnapshot } from 'firebase/firestore';
import { FC, useCallback, useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AddTaskModal from './AddTaskModal';
import { AddIcon, Container, Divider, Fab } from './styles';
import TaskCard from './TaskCard';

const Tasks: FC = () => {
  const [visible, setVisible] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const { user } = useContext(AuthContext);

  const closeModal = useCallback(() => setVisible(false), []);
  const openModal = useCallback(() => setVisible(true), []);
  const renderDivider = useCallback(() => <Divider />, []);

  const setSnapshotListener = useCallback(() => {
    const collRef = collection(db, user.uid);

    return onSnapshot(collRef, (s) => {
      const t: any[] = [];
      s.forEach((doc) => t.push({ ...doc.data(), id: doc.id }));
      setTasks(t);
    });
  }, [user]);

  useEffect(() => setSnapshotListener(), [setSnapshotListener]);

  return (
    <Container>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard user={user} task={item} />}
        ItemSeparatorComponent={renderDivider}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingTop: 40 }}
      />

      <AddTaskModal visible={visible} user={user} onRequestClose={closeModal} />

      <Fab onPress={openModal}>
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default Tasks;
