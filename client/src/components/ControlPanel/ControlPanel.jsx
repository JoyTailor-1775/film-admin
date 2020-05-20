import React, { Component } from 'react';
import './ControlPanel.scss';
import Button from '../common/Button';
import AddFilmModal from '../AddFilmModal';

export default class ControlPanel extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      actor: '',
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  closeModal = (e) => {
    this.setState({ visible: false });
  };

  searchByActor = (e) => {
    e.preventDefault();
    console.log('Lets do some searching, baby...');
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <>
        <div className="control-panel">
          <h2 className="control-panel__title">Films list</h2>
          <form className="search-interface" onSubmit={this.searchByActor}>
            <input
              type="text"
              name="actor"
              className="search-interface__input"
              placeholder="Search actor..."
              value={this.state.actor}
              onChange={this.onChange}
            />
            <Button text="Search" type="submit" color="primary" size="small" />
          </form>
          <div className="control-panel__actions">
            <Button
              text="Add New"
              size="large"
              color="action"
              onClick={this.showModal}
            />
          </div>
        </div>
        <AddFilmModal visible={this.state.visible} onModalClose={this.closeModal} />
      </>
    );
  }
}
