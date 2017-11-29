import React from 'react';
import { shallow } from 'enzyme';

import Article from '../../../app/components/Article';

describe('Article', () => {
  let article;

  beforeEach(() => {
    article = shallow(<Article />);
  });

  test('should exists', () => {
    expect(article).toBeTruthy();
  });

  test('should add title', () => {
    expect(false).toBe(true);
  });

  test('should add published date', () => {
    expect(false).toBe(true);
  });

  test('should add source name', () => {
    expect(false).toBe(true);
  });
});
