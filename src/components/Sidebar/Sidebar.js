import React, { Component } from 'react';
import PlaylistsPane from '../PlaylistsPane/PlaylistsPane';
import FiltersPane from '../FiltersPane/FiltersPane';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 sidebar">
        {this.props.reduxState.selectedPlaylist ?
          (<div>
            <FiltersPane {...this.props} />
          </div>)
          : <PlaylistsPane {...this.props} />
        }
      </div>
    );
  }
}

export default Sidebar;

