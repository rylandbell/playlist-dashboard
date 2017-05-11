import React, { Component } from 'react';

class SavePane extends Component {
  constructor(props) {
    super(props);
    this.onClickSave = this.onClickSave.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onClickSave() {
    const newPlaylistName = this.props.reduxState.newPlaylistName;
    this.props.handleSavePlaylist(newPlaylistName);
  }

  onChangeText(e) {
    this.props.handleNameTextEntry(e.target.value);
  }

  render() {
    // const playlistName = this.props.reduxState.selectedPlaylist.name;
    const newPlaylistName = this.props.reduxState.newPlaylistName;
    return (
      <div className="sidebar__save-pane">
        <div className="lead">Clicking save will create a new Spotify playlist, populated with the tracks that pass the current filter values.</div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Playlist Title</label>
          <input type="text" className="form-control" value={newPlaylistName} onChange={this.onChangeText} />
        </div>
        <button onClick={this.onClickSave} className="btn btn-primary pull-right">Save</button>
      </div>
    );
  }
}

export default SavePane;