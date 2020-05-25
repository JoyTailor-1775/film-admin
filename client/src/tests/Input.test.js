import React from 'react';
import renderer from 'react-test-renderer';

import Input from '../components/common/Input';

describe('<Input/>', () => {
  test('renders simple input', () => {
    const props = {
      title: 'Test Input',
      name: 'testInput',
      onChange: jest.fn(),
      value: 'testValue',
      maxLength: '20',
    };

    const component = renderer.create(<Input {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders number input', () => {
    const props = {
      title: 'Test Number Input',
      name: 'testInput',
      type: 'number',
      onChange: jest.fn(),
      value: 'testValue',
      min: '5',
      max: '20',
    };

    const component = renderer.create(<Input {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders invalid input', () => {
    const props = {
      title: 'Test Input',
      name: 'testInput',
      type: '232dfsdf',
      onChange: jest.fn(),
      value: 'testValue',
    };

    const component = renderer.create(<Input {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
