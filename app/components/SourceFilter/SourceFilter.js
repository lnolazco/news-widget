import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import newsService from '../../services/news-service';

class SourceFilter extends PureComponent {
  state = {
    sources: [],
  };

  componentWillMount() {
    newsService.getSources()
    .then((sources) => {
      this.setState({ sources });
    });
  }

  onChange = (e) => {
    this.props.onSelect(e.target.value);
  }

  render() {
    const { sources } = this.state;
    return (
      <select onChange={this.onChange}>
        <option value="">Filter by source</option>
        {
          sources.map((source, index) => <option key={`${source.id}-${index}`} value={source.id}>{source.name}</option>)
        }
      </select>
    );
  }
}

SourceFilter.propTypes = {
  onSelect: PropTypes.func.isRequired,
};

export default SourceFilter;
