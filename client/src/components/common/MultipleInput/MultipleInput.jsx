import React, { Component } from 'react';
import './MultipleInput.scss';
import Button from '../Button';

export default class MultipleInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentInput: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onAddItem = (e) => {
    if (!this.state.currentInput) {
      return;
    }
    if (this.props.data.some((elem) => elem === this.state.currentInput)) {
      this.setState({
        currentInput: '',
      });
      return;
    }
    this.props.onAddItem(this.state.currentInput);
    this.setState({
      currentInput: '',
    });
  };

  render() {
    const { lable, data = [], onDeleteItem } = this.props;
    return (
      <div className="multiple-field">
        <label htmlFor="multiply-input" className="multiple-field__lable">
          {lable}
        </label>
        <div className="multiple-field__interface">
          <ul className="multiple-field__data">
            {data.length > 0 ? (
              data.map((el, idx) => {
                return (
                  <li className="data-item" key={idx}>
                    <span className="data-item__text">{el}</span>
                    <button
                      type="button"
                      className="data-item__delete-button"
                      onClick={() => onDeleteItem(el)}
                    >
                      X
                    </button>
                  </li>
                );
              })
            ) : (
              <li className="data-item">
                <span className="data-item__text">Input something...</span>
              </li>
            )}
          </ul>
          <div className="multiple-field__controls">
            <input
              name="currentInput"
              type="text"
              className="multiple-field__input"
              value={this.state.currentInput}
              onChange={this.onChange}
            />
            <Button
              text="Add"
              color="action"
              size="small"
              onClick={this.onAddItem}
            />
          </div>
        </div>
      </div>
    );
  }
}
