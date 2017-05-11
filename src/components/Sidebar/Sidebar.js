import React, { Component } from 'react';
import PlaylistsPane from '../PlaylistsPane/PlaylistsPane';
import FiltersPane from '../FiltersPane/FiltersPane';
import SidebarControls from './SidebarControls';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const activeTab = this.props.reduxState.activeTab;
    return (
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 sidebar">
        <SidebarControls {...this.props} />
        {activeTab === 'playlists' ? <PlaylistsPane {...this.props} /> : null}
        {activeTab === 'filters' ? <FiltersPane {...this.props} /> : null}
        {/*activeTab === 'save' ? <SavePane {...this.props} /> : null*/}
      </div>
    );
  }
}

export default Sidebar;

