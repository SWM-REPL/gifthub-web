import returnFetch from 'return-fetch';

const instance = returnFetch({
  baseUrl: 'https://api.dev.gifthub.kr',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export { instance };
