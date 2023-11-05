import returnFetch from 'return-fetch';

const instance = returnFetch({
  baseUrl: 'https://api.gifthub.kr',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const http = {
  get: function (url: string, options?: RequestInit) {
    return instance(url, {
      method: 'GET',
      ...options,
    });
  },
  post: function (url: string, options?: RequestInit) {
    return instance(url, {
      method: 'POST',
      ...options,
    });
  },
};

export { http };
