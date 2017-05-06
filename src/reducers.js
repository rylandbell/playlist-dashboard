// import Redux from 'redux';

const app = (state = false, action) => {
  switch (action.type) {
    case 'ANYTHING':
      return state;
    default:
      return state;
  }
}

export default app;



// module.exports.explorerApp = Redux.combineReducers({
//   data: data,
//   currentPath: currentPath,
//   textContent: textContent,
//   showError: showError,
//   dataIsPreloaded: dataIsPreloaded
// });
