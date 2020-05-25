import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import MultipleInput from '../components/common/MultipleInput';

Enzyme.configure({ adapter: new Adapter() });

describe('<MultipleInput />', () => {
  test('calling the components methods', async () => {
    const props = {
      lable: 'Test Lable',
      data: ['asdf'],
      onAddItem: jest.fn(),
      onDeleteItem: jest.fn(),
    };

    const enzymeWrapper = mount(<MultipleInput {...props} />);

    enzymeWrapper.find('button.data-item__delete-button').simulate('click');
    expect(props.onDeleteItem).toHaveBeenCalled();
  });
});
