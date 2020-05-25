import React from 'react';
import renderer from 'react-test-renderer';

import Button from '../components/common/Button';

describe('<Button/>', () => {
  test('renders simple button', () => {
    const props = {
      text: 'Test Button',
      onClick: jest.fn(),
      type: 'button',
      color: 'primary',
      size: 'small',
    };

    const component = renderer.create(<Button {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders submit button', () => {
    const props = {
      text: 'Test Button',
      onClick: jest.fn(),
      type: 'submit',
      color: 'primary',
      size: 'small',
    };

    const component = renderer.create(<Button {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders invalid button', () => {
    const props = {
      text: 'Test Button',
      onClick: jest.fn(),
      type: 'sadfd',
      color: 'sdf',
      size: 'dsf',
    };

    const component = renderer.create(<Button {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
