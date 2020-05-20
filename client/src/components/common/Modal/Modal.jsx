import React, { Component } from 'react';
import './Modal.scss';

export default class Modal extends Component {
  onBackgroundClick = (e) => {
    if (e.target.id === 'modal-background') {
      this.props.onModalClose();
    }
  };
  render() {
    const { visible, title, children, cancelButton, actionButton } = this.props;
    return (
      <div
        id="modal-background"
        className={`modal__background ${visible && 'show'}`}
        onClick={this.onBackgroundClick}
        ref={this.backgroundRef}
      >
        <div className="modal">
          <h3 className="modal__title">{title}</h3>
          <main className="modal__content">{children}</main>
          <footer className="modal__footer">
            <div className="buttons">
              {cancelButton} {actionButton && actionButton}
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
