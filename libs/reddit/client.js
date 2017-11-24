import 'isomorphic-fetch';

const REDDIT_API_BASE = 'https://api.reddit.com';
export default ({ endpoint, method = 'GET', token = null }) => {
  const conf = { method };
  return fetch(`${REDDIT_API_BASE}/${endpoint}`, conf).then(res => {
    if (res.status >= 400) throw new Error('Bad response from the API');
    return res.json();
  });
};
