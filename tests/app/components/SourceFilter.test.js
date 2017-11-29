import React from 'react';
import { mount } from 'enzyme';

import SourceFilter from '../../../app/components/SourceFilter';
jest.mock('../../../app/services/news-service', () => ({
  getSources: () => {
    return new Promise((resolve) => {
      resolve([
        {
          title: 'title1',
        },
        {
          title: 'title2',
        },
      ]);
    });
  },
}));

describe('SourceFilter', () => {
  let sourceFilter;
  const spy = jest.fn();

  beforeEach(() => {
    sourceFilter = mount(<SourceFilter onSelect={spy} />);
  });

  test('should exists', () => {
    expect(sourceFilter).toBeTruthy();
  });

  test('should store sources in the state', () => {
    expect(sourceFilter.instance().state.sources).toHaveLength(2);
  });

  // test('should call prop onSelect when an option is selected', () => {
  //   const option = sourceFilter.find('option').at(2);
  //   option.simulate('click');
  //   expect(spy).toHaveBeenCalled();
  // });
});
