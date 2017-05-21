import React, { Component } from 'react';
import SidebarControls from './SidebarControls';
import PlaylistsPane from '../../../Panes/PlaylistsPane/PlaylistsPane';
import FiltersPane from '../../../Panes/FiltersPane/FiltersPane';
import SavePane from './SavePane';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    const activeTab = this.props.reduxState.activeTab;
    return (
      <div className="col-xs-12 col-sm-4 col-md-4 col-lg-3 sidebar">
        <SidebarControls {...this.props} />
        <div className="sidebar__content">
          {activeTab === 'playlists' ? <PlaylistsPane {...this.props} /> : null}
          {activeTab === 'filters' ? <FiltersPane {...this.props} /> : null}
          {activeTab === 'save' ? <SavePane {...this.props} /> : null}
        </div>
      </div>
    );
  }
}

export default Sidebar;
