import React, { Component } from 'react';
import './PushNotification.scss';

const COLOR_TYPES = Object.freeze({
  success: 'success',
  warning: 'warning',
  error: 'error',
});

export default class PushNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: null,
    };
  }
  showNotification = () => {
    this.setState({ visibility: 'show' });

    setTimeout(() => {
      this.setState({ visibility: 'hide' });
    }, 5000);
  };

  componentDidUpdate(prevProps) {
    if (this.props.err && prevProps.err !== this.props.err) {
      this.showNotification();
    }
  }

  render() {
    const { msg, type } = this.props;
    return (
      <div
        className={`push-notification ${
          this.state.visibility && this.state.visibility
        } ${COLOR_TYPES[type] || 'success'}`}
      >
        <p className="push-notification__message">{msg}</p>
      </div>
    );
  }
}
