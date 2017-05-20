import React, { Component } from 'react';
import './App.css';
import PreAuthView from './PreAuthView/PreAuthView';

class AuthView extends React.Component {
  componentWillMount = () => {
    import('./AuthView/AuthView').then(Component => {
      console.log('Component = ', Component);
      this.Component = Component;
      this.forceUpdate();
    })
  }
  render = () => (
    this.Component ? <this.Component.default {...this.props} /> : null
  )
}

class App extends Component {
  render() {
    const activeView = this.props.reduxState.activeView;

    return (
      <div className="App">
        {activeView === 'auth' ? <AuthView {...this.props} /> : <PreAuthView {...this.props} /> }
      </div>
    );
  }
}

export default App;
