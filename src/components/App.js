import React, { Component } from 'react';
import './App.css';
import PreAuthView from './PreAuthView/PreAuthView';
import ShowListsView from './ShowListsView/ShowListsView';

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.reduxState.accessToken ? <ShowListsView /> : <PreAuthView /> }
      </div>
    );
  }
}

export default App;
