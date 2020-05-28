import React, { Component } from 'react';
import './MultipleInput.scss';
import Button from '../Button';

/*
  A Multiple component is a regular input element, with an array as it's
  and, thus the possibility of multiple choice. The component needs next
  required parameters to be used:
    1) lable: String - the input's lable.
    2) data : Array - the input's value.
    3) onDeleteItem : Function - a method, that is called on deleting of
        an input's value element.
    4) onAddItem : Function - a method, that is called on adding of an
        input's value element.
    5) cancelButton: <JSX/> - a slot for cancel button.
    6) actionButton: <JSX/> - a slot for action button.
  The component also has optional parameters:
    1) fieldValidation: Function - a function, that is used to validate
      the component field. Must return Boolean, accepts current input value
      as a single parameter. Note, that there is no error handling
      mechanism in the component, you may just pass a validation function, 
      which will prevent the component input to submit, but you should handle
      the validation function expeption out of the component.
  */

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
    if (
      this.props.fieldValidation &&
      !this.props.fieldValidation(this.state.currentInput)
    ) {
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
