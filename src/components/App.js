import React, { Component } from 'react';
import './App.css';
import PreAuthView from './PreAuthView/PreAuthView';
import ShowListsView from './ShowListsView/ShowListsView';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-md-offset-3 App">
            {this.props.reduxState.accessToken ? <ShowListsView {...this.props} /> : <PreAuthView /> }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
