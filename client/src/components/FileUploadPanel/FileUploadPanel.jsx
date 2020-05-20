import React, { Component } from 'react';
import Button from '../common/Button';
import './FileUploadPanel.scss';
import formatUploadedFileName from '../../helpers/formatUploadedFileName';

export default class FileUploadPanel extends Component {
  constructor() {
    super();
    this.state = {
      file: null,
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.clearForm();
    console.log('submitted...');
    // const url = 'http://example.com/file-upload';
    // const formData = new FormData();
    // formData.append('file',file)
    // const config = {
    //     headers: {
    //         'content-type': 'multipart/form-data'
    //     }
    // }
    // return  post(url, formData,config)
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

          {this.state.file && (
            <p className="chosen-file">{formatUploadedFileName(this.state.file)}</p>
          )}
        </div>

        <Button text="Submit" type="submit" color="action" size="large" />
      </form>
    );
  }
}
