export const apiMiddleware = ({ getState, dispatch }) => next => action => {
  if (action.type !== 'API') {
    return next(action);
  }

  //dispatch a "pending" action if applicable
  action.payload.pending && dispatch({type: action.payload.pending});

  const requestOptions = {
    method: action.payload.method,
    headers: {
      Authorization: 'Bearer ' + getState().auth.accessToken
    },
  }

  if (action.payload.body) {
    requestOptions.body = JSON.stringify(action.payload.body)
  }

  const handleError = error => dispatch({
    type: action.payload.failure, 
    payload: error
  });

  fetch(action.payload.url, requestOptions)
    .then(response => {
      if (response.status >= 300) {
        handleError(response.status);
      } else {
        response.json()
          .then(responseData => {
            dispatch({
              type: action.payload.success,
              payload: responseData
            });
          });
      }
    })
    .catch(handleError);
}