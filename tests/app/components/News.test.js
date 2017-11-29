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
});
