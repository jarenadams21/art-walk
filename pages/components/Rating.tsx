import { useDisclosure } from '@mantine/hooks';
import { Modal, Group, Button } from '@mantine/core';
import { HiOutlineSaveAs } from 'react-icons/hi';
import { FcLikePlaceholder } from 'react-icons/fc';
import { AiOutlineDislike } from 'react-icons/ai';
import styles from '@/styles/Home.module.css'

const RatingModal = ({children}) =>  {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Actions" centered>
          <div className={styles.imageActionsModal}>
        {children}
        </div>
      </Modal>

      <Group position="center">
        <Button onClick={open}>Actions...</Button>
      </Group>
    </>
  );
}

export default RatingModal;