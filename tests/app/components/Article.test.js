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
    expect(article.find('.article__title')).toHaveLength(1);
  });

  test('should add published date', () => {
    expect(article.find('.article__date')).toHaveLength(1);
  });

  test('should add source name', () => {
    expect(article.find('.article__source')).toHaveLength(1);
  });
});
