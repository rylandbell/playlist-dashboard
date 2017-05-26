import React, { Component } from 'react';
import SidebarControls from './SidebarControls';
import PlaylistsPane from '../../../Panes/PlaylistsPane/PlaylistsPane';
import FiltersPane from '../../../Panes/FiltersPane/FiltersPane';
import SavePane from './SavePane';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const activeSidebarTab = this.props.reduxState.activeSidebarTab;
    return (
      <div className="sidebar">
        <SidebarControls {...this.props} />
        <div className="sidebar__content">
          {activeSidebarTab === 'playlists' ? <PlaylistsPane {...this.props} /> : null}
          {activeSidebarTab === 'filters' ? <FiltersPane {...this.props} /> : null}
          {activeSidebarTab === 'save' ? <SavePane {...this.props} /> : null}
        </div>
      </div>
    );
  }
}

export default Sidebar;

