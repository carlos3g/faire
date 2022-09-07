import { FC, useCallback } from 'react';

import { User } from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';

import { db } from '@services';
import { ITask } from '@types';
import { CheckBox, Container, PriorityIndicator, Title } from './styles';

type TaskCardProps = {
  task: ITask;
  user: User;
};

const TaskCard: FC<TaskCardProps> = ({ task, user }) => {
  const handleTaskCheck = useCallback(async () => {
    const docRef = doc(db, user.uid, task.id);
    await deleteDoc(docRef);
  }, [task, user]);

  return (
    <Container>
      <CheckBox onPress={handleTaskCheck} />
      <Title>{task.title}</Title>
      <PriorityIndicator level={task.priority} />
    </Container>
  );
};

export default TaskCard;
