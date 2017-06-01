const fetchCalls = {};

fetchCalls.handleAuthRequest = function() {
  console.log('handleAuthRequest runs');
  const clientID = '74436b5dd9624f8782f138387e69daaf';
  const redirectURI = window.location.href.split('#')[0].slice(0,-1);
  const scopes = ['playlist-read-private','playlist-modify-private'];

  const authURI = 'https://accounts.spotify.com/authorize?'
    + 'client_id=' + clientID
    + '&redirect_uri=' + encodeURIComponent(redirectURI)
    + '&response_type=token'
    + '&scope=' + scopes.join('%20')
    + '&show-dialog=true';
  window.location = authURI;
}

export default fetchCalls;