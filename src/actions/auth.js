export const authRequest = () => ({type: 'AUTH_REQUEST'});

export const setAccessToken = data => (
  {
    type: 'SET_ACCESS_TOKEN',
    data: data
  }
);