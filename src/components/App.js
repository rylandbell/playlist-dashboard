import React, { Component } from 'react';
import './App.css';
import PreAuthView from './PreAuthView/PreAuthView';
import SelectPlaylistsView from './SelectPlaylistsView/SelectPlaylistsView';
import SelectFiltersView from './SelectFiltersView/SelectFiltersView';

class App extends Component {
  render() {
    const activeView = this.props.reduxState.activeView;

    //use enum instead of switch statement to select visible view:
    const viewEnum = {
      preAuth: <PreAuthView />,
      selectPlaylists: <SelectPlaylistsView {...this.props} />,
      selectFilters: <SelectFiltersView {...this.props} />
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6 col-md-offset-3 App">
            {viewEnum[activeView]}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
