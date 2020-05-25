import React, { Component } from 'react';
import './Modal.scss';

/*
  A Modal component needs next required parameters to be used:
    1) visible: Boolean - show/hide the component.
    2) title : String - the modal's title.
    3) children: <JSX/> - the modal's inner content, should be 
        semantic JSX - elements.
    4) cancelButton: <JSX/> - a slot for cancel button.
    4) actionButton: <JSX/> - a slot for action button.
    6) onModalClose: Function - a function, that will be called 
        when the modal's background or cancel button are clicked.
*/

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
