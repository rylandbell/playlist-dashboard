import React, { Component } from 'react';
import './App.css';
import PreAuthView from './PreAuthView/PreAuthView';

//load AuthView as separate module, once authorization has been established
class AuthView extends React.Component {
  componentWillMount = () => {
    import('./AuthView/AuthView').then(Component => {
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
