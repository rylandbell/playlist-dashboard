import React, { Component } from 'react';
import PlaylistsPane from '../PlaylistsPane/PlaylistsPane';
import FiltersPane from '../FiltersPane/FiltersPane';
import TracksPane from '../TracksPane/TracksPane';
import './AuthView.css';

class AuthView extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-md-3">
          <row>
            {this.props.reduxState.selectedPlaylist ?
              <FiltersPane {...this.props} />
              : <PlaylistsPane {...this.props} />
            }
          </row>
        </div>
        <div className="col-xs-12 col-md-9">
          <div className="row">
            {this.props.reduxState.selectedPlaylist ? 
              <TracksPane {...this.props} /> :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default AuthView;

