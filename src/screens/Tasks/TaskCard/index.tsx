import { ITask } from '@types';
import { useCallback } from 'react';
import { CheckBox, Container, PriorityIndicator, Title } from './styles';

type TaskCardProps = {
  task: ITask;
  tasksSetter: (callback: (pS: ITask[]) => ITask[]) => void;
};

function TaskCard({ task, tasksSetter }: TaskCardProps): JSX.Element {
  const handleTaskCheck = useCallback(
    () => tasksSetter((pS) => pS.filter(({ id }) => id !== task.id)),
    []
  );

  return (
    <Container>
      <CheckBox onPress={handleTaskCheck} />
      <Title>{task.title}</Title>
      <PriorityIndicator level={task.priority} />
    </Container>
  );
}

export default TaskCard;
