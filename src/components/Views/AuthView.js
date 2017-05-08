import React, { Component } from 'react';
import SelectPlaylistsPane from '../SelectPlaylistsPane/SelectPlaylistsPane';
import SelectFiltersPane from '../SelectFiltersPane/SelectFiltersPane';
import './AuthView.css';

class AuthView extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-md-4">
          <row>
            {this.props.reduxState.selectedPlaylist ?
              <SelectFiltersPane {...this.props} />
              : <SelectPlaylistsPane {...this.props} />
            }
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

