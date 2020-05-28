import React, { Component } from 'react';
import { connect } from 'react-redux';
import './ControlPanel.scss';
import Button from '../common/Button';
import AddFilmModal from '../AddFilmModal';
import { filmsOperations, filmsActions } from '../../store/films';

class ControlPanel extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      cast: '',
      title: '',
    };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  closeModal = (e) => {
    this.setState({ visible: false });
  };

  searchByParam = (e) => {
    e.preventDefault();
    const { visible, ...formFields } = this.state;
    const requestParams = {};
    for (const key in formFields) {
      if (formFields[key]) {
        requestParams[key] = formFields[key];
      }
    }
    this.props.setRequestParam({ filters: requestParams });
    this.props.requestFilms(this.props.filmRequest);
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
          <form className="search-interface" onSubmit={this.searchByParam}>
            <input
              type="text"
              name="title"
              className="search-interface__input"
              placeholder="Search title..."
              value={this.state.title}
              onChange={this.onChange}
            />
            <input
              type="text"
              name="cast"
              className="search-interface__input"
              placeholder="Search actor..."
              value={this.state.cast}
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

const MapDispatchToProps = {
  requestFilms: filmsOperations.requestFilms,
  setRequestParam: filmsActions.setRequestParam,
};

const MapStateToProps = (state) => ({
  films: state.films.films,
  filmRequest: state.films.filmRequest,
});

export default connect(MapStateToProps, MapDispatchToProps)(ControlPanel);
