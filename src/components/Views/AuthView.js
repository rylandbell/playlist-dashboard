import React, { Component } from 'react';
import PlaylistsPane from '../PlaylistsPane/PlaylistsPane';
import FiltersPane from '../FiltersPane/FiltersPane';
import TracksPane from '../TracksPane/TracksPane';
import ChartPane from '../ChartPane/ChartPane';
import './AuthView.css';

class AuthView extends Component {
  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-4 col-md-3 sidebar">
          {this.props.reduxState.selectedPlaylist ?
            <FiltersPane {...this.props} />
            : <PlaylistsPane {...this.props} />
          }
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9">
          <div className="row">
            {this.props.reduxState.selectedPlaylist ? 
              <TracksPane {...this.props} /> :
              null
            }
          </div>
          <div className="row">
            {this.props.reduxState.selectedPlaylist ? 
              <ChartPane {...this.props} /> :
              null
            }
          </div>
        </div>
      </div>
    );
  }
}

export default AuthView;

