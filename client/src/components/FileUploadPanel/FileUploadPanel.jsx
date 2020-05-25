import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../common/Button';
import './FileUploadPanel.scss';
import { filmsOperations } from '../../store/films';
class FileUploadPanel extends Component {
  constructor() {
    super();
    this.state = {
      file: null,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.files[0],
    });
  };

  onFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', this.state.file);
    await this.props.uploadFilmsFile(formData);
    this.clearForm();
  };

  clearForm = () => {
    this.setState({
      file: null,
    });
  };

  render() {
    return (
      <form className="panel" onSubmit={this.onFormSubmit}>
        <div className="panel__input-wrapper">
          <label className="panel__input" htmlFor="file-upload">
            Choose file...
          </label>
          <input
            id="file-upload"
            type="file"
            accept=".txt"
            name="file"
            onChange={this.onChange}
          />

          {this.state.file && <p className="chosen-file">{this.state.file.name}</p>}
        </div>

        <Button text="Submit" type="submit" color="action" size="large" />
      </form>
    );
  }
}

const MapDispatchToProps = {
  uploadFilmsFile: filmsOperations.uploadFilmsFile,
};

export default connect(null, MapDispatchToProps)(FileUploadPanel);
