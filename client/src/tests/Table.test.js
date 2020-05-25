import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Table from '../components/common/Table';

Enzyme.configure({ adapter: new Adapter() });

describe('<Table />', () => {
  test('calling the components methods', async () => {
    const testColumns = [
      {
        heading: 'Column1',
        dataKey: 'column1',
        width: '110px',
        sortable: true,
        sortFunc: jest.fn(),
      },
      { heading: 'Column2', dataKey: 'column2', width: '100px' },
    ];
    const props = {
      data: [
        { column1: 'something', column2: 'another', id: 0 },
        { column1: 'somethinsdg', column2: 'anothe22r', id: 1 },
      ],
      onRowClick: jest.fn(),
      loading: false,
      deletable: true,
      onDelete: jest.fn(),
      rowKey: 'id',
    };

    const enzymeWrapper = mount(<Table columns={testColumns} {...props} />);

    enzymeWrapper.find('.table__cell--delete button').first().simulate('click');
    expect(props.onDelete).toHaveBeenCalled();

    enzymeWrapper.find('tbody tr.table__row').first().simulate('click');
    expect(props.onRowClick).toHaveBeenCalledTimes(1);

    enzymeWrapper.find('.triangle').first().simulate('click');
    expect(testColumns[0].sortFunc).toHaveBeenCalled();
  });
});
