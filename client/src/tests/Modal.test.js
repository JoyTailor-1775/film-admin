import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Modal from '../components/common/Modal';

Enzyme.configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  test('calling the components methods', async () => {
    const props = {
      visible: true,
      title: 'Some title',
      children: <div className="test-elem">Test children.....</div>,
      onModalClose: jest.fn(),
    };

    const enzymeWrapper = mount(<Modal {...props} />);

    enzymeWrapper.find('#modal-background').simulate('click');
    enzymeWrapper.find('.modal__title').simulate('click');
    enzymeWrapper.find('.test-elem').simulate('click');
    enzymeWrapper.find('.modal__footer').simulate('click');
    enzymeWrapper.find('.modal__content').simulate('click');
    expect(props.onModalClose).toHaveBeenCalledTimes(1);
  });
});
