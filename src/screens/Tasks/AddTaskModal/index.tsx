import { Button, Input } from '@components';
import { db } from '@services';
import { ITask } from '@types';
import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';
import { useCallback, useState } from 'react';
import { Modal, ModalProps } from 'react-native';
import { Content, Overlay, Title } from './styles';

interface IModalProps extends ModalProps {
  user: User;
}

function AddTaskModal({ onRequestClose, user, ...rest }: IModalProps) {
  const [title, setTitle] = useState<string>('');
  const [priority, setPriority] = useState<string>('');

  const handleAddTask = useCallback(async () => {
    await addDoc(collection(db, user.uid), {
      priority: Number(priority) as ITask['priority'],
      title,
    });

    setTitle('');
    setPriority('');
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
