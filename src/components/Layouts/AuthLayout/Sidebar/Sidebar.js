import React, { Component } from 'react';
import SidebarNav from './SidebarNav';
import Playlists from '../../../Blocks/Playlists/Playlists';
import Filters from '../../../Blocks/Filters/Filters';
import SavePane from '../../../Blocks/SavePane/SavePane';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const activeSidebarTab = this.props.reduxState.activeSidebarTab;
    return (
      <div className="sidebar">
        <SidebarNav {...this.props} />
        <div className="sidebar__content">
          {activeSidebarTab === 'playlists' && <Playlists />}
          {activeSidebarTab === 'filters' && <Filters {...this.props} />}
          {activeSidebarTab === 'save' && <SavePane {...this.props} />}
        </div>
      </div>
    );
  }
}

export default Sidebar;