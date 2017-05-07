import React, { Component } from 'react';
import './App.css';
import PreAuthView from './PreAuthView/PreAuthView';
import SelectPlaylistsView from './SelectPlaylistsView/SelectPlaylistsView';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-md-offset-3 App">
            {this.props.reduxState.accessToken ? <SelectPlaylistsView {...this.props} /> : <PreAuthView /> }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
