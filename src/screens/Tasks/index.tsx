import { FC, useCallback, useContext, useEffect, useState } from 'react';
import { FlatList } from 'react-native';

import { collection, onSnapshot } from 'firebase/firestore';

import { AuthContext } from '@providers';
import { db } from '@services';
import { ITask } from '@types';
import AddTaskModal from './AddTaskModal';
import { AddIcon, Container, Divider, Fab } from './styles';
import TaskCard from './TaskCard';

const Tasks: FC = () => {
  const [visible, setVisible] = useState(false);
  const [tasks, setTasks] = useState<ITask[]>([]);
  const { user } = useContext(AuthContext);

  const closeModal = useCallback(() => setVisible(false), []);
  const openModal = useCallback(() => setVisible(true), []);
  const renderDivider = useCallback(() => <Divider />, []);

  useEffect(() => {
    function setSnapshotListener() {
      const colletionRef = collection(db, user!.uid);

      return onSnapshot(colletionRef, (snapshot) => {
        const tasksUpdated: ITask[] = [];

        snapshot.forEach((doc) =>
          tasksUpdated.push({ ...doc.data(), id: doc.id } as ITask)
        );

        setTasks(tasksUpdated);
      });
    }

    return setSnapshotListener();
  }, [user]);

  return (
    <Container>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskCard user={user!} task={item} />}
        ItemSeparatorComponent={renderDivider}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingTop: 40 }}
      />

      <AddTaskModal
        visible={visible}
        user={user!}
        onRequestClose={closeModal}
      />

      <Fab onPress={openModal}>
        <AddIcon />
      </Fab>
    </Container>
  );
};

export default Tasks;
