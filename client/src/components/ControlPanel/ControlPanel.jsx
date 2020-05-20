import React, { Component } from 'react';
import './ControlPanel.scss';
import Button from '../common/Button';
import AddFilmModal from '../AddFilmModal';

export default class ControlPanel extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  closeModal = (e) => {
    this.setState({ visible: false });
  };

  onAddNewFilm = () => {
    this.showModal();
  };

  render() {
    return (
      <>
        <div className="control-panel">
          <h2 className="control-panel__title">Films list</h2>
          <form className="search-interface">
            <input
              type="text"
              className="search-interface__input"
              placeholder="Search actor..."
            />
          </form>
          <div className="control-panel__actions">
            <Button
              text="Add New"
              size="large"
              color="action"
              onClick={this.onAddNewFilm}
            />
          </div>
        </div>
        <AddFilmModal visible={this.state.visible} onModalClose={this.closeModal} />
      </>
    );
  }
}
