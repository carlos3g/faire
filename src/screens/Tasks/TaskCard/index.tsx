import { db } from '@services';
import { ITask } from '@types';
import { User } from 'firebase/auth';
import { deleteDoc, doc } from 'firebase/firestore';
import { useCallback } from 'react';
import { CheckBox, Container, PriorityIndicator, Title } from './styles';

type TaskCardProps = {
  task: ITask;
  user: User;
};

function TaskCard({ task, user }: TaskCardProps): JSX.Element {
  const handleTaskCheck = useCallback(() => {
    const docRef = doc(db, user.uid, String(task.id));
    deleteDoc(docRef);
  }, []);

  return (
    <Container>
      <CheckBox onPress={handleTaskCheck} />
      <Title>{task.title}</Title>
      <PriorityIndicator level={task.priority} />
    </Container>
  );
}

export default TaskCard;
