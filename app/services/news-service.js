import { HOST_URL, API_KEY } from '../config/constants';

export const service = {
  getNews: (source) => {
    return new Promise((resolve, reject) => {
      const type = source ? `top-headlines?source=${source}&q=bitcoin&apiKey=${API_KEY}` : `everything?q=bitcoin&apiKey=${API_KEY}`;
      const newsUrl = `${HOST_URL}/${type}`;
      fetch(newsUrl)
      .then(response => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'ok') {
          resolve(responseJson.articles);
        }
      })
      .catch(err => reject(err));
    });
  },
  moreNews: (source) => {
    return new Promise((resolve, reject) => {
      const type = source ? `top-headlines?source=${source}&apiKey=${API_KEY}` : `everything?q=bitcoin&apiKey=${API_KEY}`;
      const newsUrl = `${HOST_URL}/${type}`;
      fetch(newsUrl)
      .then(response => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'ok') {
          resolve(responseJson.articles);
        }
      })
      .catch(err => reject(err));
    });
  },
  getSources: () => {
    return new Promise((resolve, reject) => {
      const newsUrl = `${HOST_URL}/sources?apiKey=${API_KEY}`;
      fetch(newsUrl)
      .then(response => response.json())
      .then((responseJson) => {
        if (responseJson.status === 'ok') {
          resolve(responseJson.sources);
        }
      })
      .catch(err => reject(err));
    });
  },
};

export default service;
