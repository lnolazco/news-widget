import React from 'react';
import { shallow } from 'enzyme';

import News from '../../../app/components/News';

jest.mock('../../../app/services/news-service', () => ({
  getNews: () => {
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
  moreNews: () => {
    return new Promise((resolve) => {
      resolve([
        {
          title: 'title3',
        },
        {
          title: 'title4',
        },
      ]);
    });
  },
}));

describe('News', () => {
  let news;

  beforeEach(() => {
    news = shallow(<News />);
  });

  test('should exists', () => {
    expect(news).toBeTruthy();
  });

  test('should store articles in the state', () => {
    expect(news.instance().state.articles).toHaveLength(2);
  });

  // test('should add 2 more news when user click on Show More button', () => {
  //   const button = news.find('.news__showmore');
  //   button.simulate('click');
  //   // news.update();
  //   expect(news.instance().state.articles).toHaveLength(4);
  // });
});
