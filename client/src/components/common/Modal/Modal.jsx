import React from 'react';
import './Modal.scss';

const Modal = ({
  visible,
  onModalClose,
  title,
  children,
  cancelButton,
  actionButton,
}) => {
  return (
    <div
      className={`modal__background ${visible ? 'show' : 'hide'}`}
      onClick={onModalClose}
    >
      <div className="modal">
        <h3 className="modal__title">{title}</h3>
        <div className="modal__content">{children}</div>
        <div className="modal__actions">
          {cancelButton} {actionButton && actionButton}
        </div>
      </div>
    </div>
  );
};

export default Modal;
