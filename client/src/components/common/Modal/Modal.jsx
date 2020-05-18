import React from 'react';

const Modal = ({
  visible,
  onModalClose,
  title,
  content,
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
        <div className="modal__content">{content}</div>
        <div className="modal__actions">
          {cancelButton} {actionButton && actionButton}
        </div>
      </div>
    </div>
  );
};

export default Modal;
