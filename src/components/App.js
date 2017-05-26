import React, { Component } from 'react';
import './App.css';
import PreAuthLayout from './Layouts/PreAuthLayout/PreAuthLayout';
import AuthView from './Layouts/AuthView/AuthView';

//load AuthView as separate module, once authorization has been established
// class AuthView extends React.Component {
//   componentWillMount = () => {
//     import('./Layouts/AuthView/AuthView').then(Component => {
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
        {authStatus ? <AuthView {...this.props} /> : <PreAuthLayout {...this.props} /> }
      </div>
    );
  }
}

export default App;
