import React, { Component } from 'react';
import './App.css';
import PreAuthLayout from './Layouts/PreAuthLayout/PreAuthLayout';
import AuthLayout from './Layouts/AuthLayout/AuthLayout';

//load AuthLayout as separate module, once authorization has been established
// class AuthLayout extends React.Component {
//   componentWillMount = () => {
//     import('./Layouts/AuthLayout/AuthLayout').then(Component => {
//       this.Component = Component;
//       this.forceUpdate();
//     })
//   }
//   render = () => (
//     this.Component && <this.Component.default {...this.props} />
//   )
// }

class App extends Component {
  render() {
    const authStatus = this.props.reduxState.authStatus;

    return (
      <div className="App">
        {authStatus ? <AuthLayout {...this.props} /> : <PreAuthLayout {...this.props} /> }
      </div>
    );
  }
}

export default App;
