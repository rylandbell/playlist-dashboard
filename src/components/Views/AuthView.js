import React, { Component } from 'react';
import TracksPane from '../TracksPane/TracksPane';
import ChartPane from '../ChartPane/ChartPane';
import Sidebar from '../Sidebar/Sidebar';
import './AuthView.css';

class AuthView extends Component {
  render() {
    return (
      <div>
        <Sidebar {...this.props} />
        <div className="col-xs-12 col-sm-8 col-md-8 col-lg-9 not-sidebar">
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

