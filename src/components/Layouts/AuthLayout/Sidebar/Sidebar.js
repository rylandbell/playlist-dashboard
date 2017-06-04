import React, { Component } from 'react';
import SidebarNav from './SidebarNav';
import Playlists from '../../../blocks/Playlists/Playlists';
import Filters from '../../../blocks/Filters/Filters';
import SavePane from '../../../blocks/SavePane/SavePane';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const activeSidebarTab = this.props.activeSidebarTab;
    return (
      <div className="sidebar">
        <SidebarNav mediaType={this.props.mediaType} />
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
