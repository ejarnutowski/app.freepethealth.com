import React from 'react';
import DialogTitle from '@mui/joy/DialogTitle';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';

const styles = {
  dialog: {
    padding: 0,
    gap: 0,
  },
  title: {
    padding: 2,
    color: 'white',
    background: 'linear-gradient(90deg, #333333 0, #888888 100%)',
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },
  close: {
    svg: {
      color: 'white',
    },
    '&:hover': {
      background: 'rgba(0,0,0,.2)',
    },
  },
};

const BaseModal = React.memo(({ children, title, width = 500, onClose }) => {
  return (
    <Modal open={true} onClose={onClose}>
      <ModalDialog sx={{...styles.dialog, width }} variant='plain'>
        <DialogTitle sx={styles.title}>{title}</DialogTitle>
          {children}
        <ModalClose sx={styles.close} />
      </ModalDialog>
    </Modal>
  );
});

BaseModal.displayName = 'BaseModal';
export default BaseModal;
