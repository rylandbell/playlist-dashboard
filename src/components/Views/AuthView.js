import React, { Component } from 'react';
import SelectPlaylistsView from '../SelectPlaylistsView/SelectPlaylistsView';
import SelectFiltersView from '../SelectFiltersView/SelectFiltersView';
import './AuthView.css';

class AuthView extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-md-4">
          <row>
            <SelectPlaylistsView {...this.props} />
          </row>
          <row>
            <SelectFiltersView {...this.props} />
          </row>
        </div>
        <div className="col-xs-12 col-md-8">
          <div className="row">
            <h4>Chart</h4>
          </div>
          <div className="row">
            <h4>Tracks</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default AuthView;

