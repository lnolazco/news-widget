import React from 'react';
import { shallow } from 'enzyme';

import News from '../../../app/components/News';

describe('News', () => {
  let news;

  beforeEach(() => {
    news = shallow(<News />);
  });

  test('should exists', () => {
    expect(news).toBeTruthy();
  });

  test('should call service to get last news', () => {
    expect(false).toBe(true);
  });

  test('should store articles in the state', () => {
    expect(false).toBe(true);
  });

  test('should add same number of Articles than the articles received from service', () => {
    expect(false).toBe(true);
  });

  test('should add SourceFilter component', () => {
    expect(false).toBe(true);
  });

  test('should add 5 more news when user click on Show More button', () => {
    expect(false).toBe(true);
  });
});
