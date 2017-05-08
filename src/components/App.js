import React, { Component } from 'react';
import './App.css';
import PreAuthView from './Views/PreAuthView';
import AuthView from './Views/AuthView';

class App extends Component {
  render() {
    const activeView = this.props.reduxState.activeView;

    //use enum instead of switch statement to select visible view:
    const viewEnum = {
      preAuth: <PreAuthView {...this.props} />,
      auth: <AuthView {...this.props} />,
    }
    return (
      <div className="container App">
        <div className="row">
          {viewEnum[activeView]}
        </div>
      </div>
    );
  }
}

export default App;
