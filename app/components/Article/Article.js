import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'antd';

const dateToString = (toConvert) => {
  const date = new Date(toConvert);
  return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getFullYear()}`;
};

const Article = ({ title, publishedAt, sourceName, url }) => (
  <Card>
    <div className="article">
      <a href={url} alt={title}>
        <h3 className="article__title">{title}</h3>
        <div className="article__date">{dateToString(publishedAt)}</div>
        <div className="article__source">{sourceName}</div>
      </a>
    </div>
  </Card>
);

Article.propTypes = {
  title: PropTypes.string,
  publishedAt: PropTypes.string,
  sourceName: PropTypes.string,
  url: PropTypes.string,
};

Article.defaultProps = {
  title: '',
  publishedAt: '',
  sourceName: '',
  url: '',
};

export default Article;
