import React from 'react';
import { shallow } from 'enzyme';

import SourceFilter from '../../../app/components/SourceFilter';

describe('SourceFilter', () => {
  let sourceFilter;

  beforeEach(() => {
    sourceFilter = shallow(<SourceFilter />);
  });

  test('should exists', () => {
    expect(sourceFilter).toBeTruthy();
  });

  test('should call service to get sources', () => {
    expect(false).toBe(true);
  });

  test('should store sources in the state', () => {
    expect(false).toBe(true);
  });

  test('should add same number of options than the sources received from service', () => {
    expect(false).toBe(true);
  });

  test('should call prop onSelect when an option is selected', () => {
    expect(false).toBe(true);
  });
});
