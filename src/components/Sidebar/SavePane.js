import React, { Component } from 'react';
import Message from '../Message';

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
    const state = this.props.reduxState;
    const newPlaylistName = state.newPlaylistName;
    const savePending = state.fetchStatus.createPlaylistPending || state.fetchStatus.addTracksToPlaylistPending;
    const saveSuccess = state.fetchStatus.addTracksToPlaylistSuccess;

    return (
      <div className="sidebar__save-pane">
        <div className="lead">Clicking save will create a new Spotify playlist, populated with the tracks that pass the current filter values.</div>
        <div className="form-group">
          <input type="text" className="form-control" value={newPlaylistName} onChange={this.onChangeText} />
        </div>
        <button onClick={this.onClickSave} className="btn btn-primary pull-right">Save</button>
        <br />
        {savePending ? <Message classList="" loading={true} text="Saving on Spotify... " {...this.props} /> : null}
        {saveSuccess ? <Message classList="" success={true} text="Playlist successfully created.&nbsp;" {...this.props} /> : null}
      </div>
    );
  }
}

export default SavePane;