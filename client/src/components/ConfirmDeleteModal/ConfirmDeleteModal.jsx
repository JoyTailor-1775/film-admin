import React from 'react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import './ConfirmDeleteModal.scss';

const ConfirmDeleteModal = ({ visible, onCancel, onDelete, maxWidth }) => {
  return (
    <Modal
      visible={visible}
      title="Delete Film"
      onModalClose={onCancel}
      actionButton={<Button text="Delete" color="error" onClick={onDelete} />}
      cancelButton={<Button text="Cancel" color="regular" onClick={onCancel} />}
      maxWidth={maxWidth}
    >
      <p className="message">This action is irreversible. Are you sure?</p>
    </Modal>
  );
};

export default ConfirmDeleteModal;
