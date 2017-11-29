import React, { PureComponent } from 'react';
import { Card, Button } from 'antd';

import newsService from '../../services/news-service';
import SourceFilter from '../SourceFilter';
import Article from '../Article';

class News extends PureComponent {
  state = {
    articles: [],
    sourceId: '',
  };

  componentWillMount() {
    newsService.getNews()
    .then((articles) => {
      this.setState({ articles });
    });
  }

  onSourceSelect = (sourceId) => {
    newsService.getNews(sourceId)
    .then((articles) => {
      this.setState({ articles, sourceId });
    });
  };

  showMore = () => {
    newsService.moreNews(this.state.sourceId)
    .then((articles) => {
      this.setState(prevState => ({ articles: [...prevState.articles, ...articles] }));
    });
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="news">
        <Card title="News" extra={<SourceFilter onSelect={this.onSourceSelect} />}>
          <div>
            {
              articles.map(article => (
                <Article
                  key={article.url}
                  title={article.title}
                  url={article.url}
                  publishedAt={article.publishedAt}
                  sourceName={article.source.name}
                />
              ))
            }
          </div>
          <Button className="news__showmore" onClick={this.showMore}>Show More</Button>
        </Card>
      </div>
    );
  }
}

export default News;
