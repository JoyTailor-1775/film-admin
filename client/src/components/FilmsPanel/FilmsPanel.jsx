import React, { Component } from 'react';
import ControlPanel from '../ControlPanel';
import Button from '../common/Button';
import FileUploadPanel from '../FileUploadPanel';
import AddFilmModal from '../AddFilmModal';
import FilmsTable from '../FilmsTable';

export default class FilmsPanel extends Component {
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
      <div className="films-table">
        <ControlPanel
          title="Films List"
          actionsButtons={
            <Button
              text="Add New"
              size="large"
              color="action"
              onClick={this.onAddNewFilm}
            />
          }
        />
        <FilmsTable />
        <FileUploadPanel />
        <AddFilmModal visible={this.state.visible} onModalClose={this.closeModal} />
      </div>
    );
  }
}
