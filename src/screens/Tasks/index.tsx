import { ITask } from '@types';
import { useCallback, useState } from 'react';
import { FlatList } from 'react-native';
import AddTaskModal from './AddTaskModal';
import { AddIcon, Container, Divider, Fab } from './styles';
import TaskCard from './TaskCard';

function Tasks() {
  const [visible, setVisible] = useState<boolean>(false);
  const [tasks, setTasks] = useState<ITask[]>([]);

  const closeModal = useCallback(() => setVisible(false), []);
  const openModal = useCallback(() => setVisible(true), []);

  return (
    <Container>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TaskCard tasksSetter={setTasks} task={item} />
        )}
        ItemSeparatorComponent={() => <Divider />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 16, paddingTop: 40 }}
      />

      <AddTaskModal
        visible={visible}
        onRequestClose={closeModal}
        tasksSetter={setTasks}
      />

      <Fab onPress={openModal}>
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default Tasks;
