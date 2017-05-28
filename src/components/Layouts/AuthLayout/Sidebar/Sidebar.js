import React, { Component } from 'react';
import SidebarNav from './SidebarNav';
import Playlists from '../../../Blocks/Playlists/Playlists';
import Filters from '../../../Blocks/Filters/Filters';
import SavePane from '../../../Blocks/SavePane/SavePane';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const activeSidebarTab = this.props.activeSidebarTab;
    return (
      <div className="sidebar">
        <SidebarNav />
        <div className="sidebar__content">
          {activeSidebarTab === 'playlists' && <Playlists />}
          {activeSidebarTab === 'filters' && <Filters />}
          {activeSidebarTab === 'save' && <SavePane />}
        </div>
      </div>
    );
  }
}

export default Sidebar;