import React, { Component } from 'react';
import './App.css';
import PreAuthView from './Views/PreAuthView/PreAuthView';
import AuthView from './Views/AuthView/AuthView';

//load AuthView as separate module, once authorization has been established
// class AuthView extends React.Component {
//   componentWillMount = () => {
//     import('./Views/AuthView/AuthView').then(Component => {
//       this.Component = Component;
//       this.forceUpdate();
//     })
//   }
//   render = () => (
//     this.Component ? <this.Component.default {...this.props} /> : null
//   )
// }

class App extends Component {
  render() {
    const authStatus = this.props.reduxState.authStatus;

    return (
      <div className="App">
        {authStatus ? <AuthView {...this.props} /> : <PreAuthView {...this.props} /> }
      </div>
    );
  }
}

export default App;
