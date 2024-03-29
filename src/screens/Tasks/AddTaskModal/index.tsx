import { FC, useCallback, useState } from 'react';
import { Modal, ModalProps } from 'react-native';

import { User } from 'firebase/auth';
import { addDoc, collection } from 'firebase/firestore';

import { Button, Input } from '@components';
import { db } from '@services';
import { ITask } from '@types';
import { Content, Overlay, Title } from './styles';

interface AddTaskModalProps extends ModalProps {
  user: User;
}

const AddTaskModal: FC<AddTaskModalProps> = ({
  onRequestClose,
  user,
  ...rest
}) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');

  const handleAddTask = useCallback(async () => {
    await addDoc(collection(db, user.uid), {
      priority: priority as unknown as ITask['priority'],
      title,
    });

    setTitle('');
    setPriority('');
  }, [priority, title, user]);

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
};

export default AddTaskModal;
