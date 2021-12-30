import { Button, Input } from '@components';
import { ITask } from '@types';
import { useCallback, useState } from 'react';
import { Modal, ModalProps } from 'react-native';
import { Content, Overlay, Title } from './styles';

interface IModalProps extends ModalProps {
  tasksSetter: (callback: (pS: ITask[]) => ITask[]) => void;
}

function AddTaskModal({ onRequestClose, tasksSetter, ...rest }: IModalProps) {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<string>('');

  const handleAddTask = useCallback(() => {
    const newTask: ITask = {
      id: Date.now(),
      priority: Number(priority) as ITask['priority'],
      title,
    };

    setTitle('');
    setPriority('');
    tasksSetter((pS) => [...pS, newTask]);
  }, [priority, title]);

  return (
    <Modal
      animationType="slide"
      transparent
      onRequestClose={onRequestClose}
      {...rest}
    >
      <Overlay onPress={onRequestClose} />
      <Content>
        <Title>Criar tarefa</Title>

        <Input
          placeholder="Título"
          value={title}
          onChangeText={setTitle}
          autoFocus
        />
        <Input
          placeholder="Prioridade"
          keyboardType="numeric"
          value={priority}
          onChangeText={setPriority}
          style={{ marginTop: 6, marginBottom: 10 }}
        />

        <Button label="Criar" onPress={handleAddTask} />
      </Content>
    </Modal>
  );
}

export default AddTaskModal;
