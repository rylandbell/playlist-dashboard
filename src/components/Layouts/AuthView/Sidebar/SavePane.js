import React, { Component } from 'react';
import Message from '../../../Utilities/Message/Message';

class SavePane extends Component {
  constructor(props) {
    super(props);
    this.onClickSave = this.onClickSave.bind(this);
    this.onChangeText = this.onChangeText.bind(this);
  }

  onClickSave() {
    const state = this.props.reduxState;
    const newPlaylistName = state.newPlaylistName;
    const savePending = state.fetchStatus.createPlaylistPending || state.fetchStatus.addTracksToPlaylistPending;
    if (savePending) {
      return;
    }
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
    const saveFailure = state.fetchStatus.createPlaylistFailure || state.fetchStatus.addTracksToPlaylistFailure;

    return (
      <div className="sidebar__save-pane">
        <div className="lead">Create a new Spotify playlist from the currently selected tracks.</div>
        <div className="form-group">
          <input type="text" className="form-control" value={newPlaylistName} onChange={this.onChangeText} />
        </div>
        <button onClick={this.onClickSave} className={"btn btn-primary pull-right " + (savePending ? 'disabled' : '')} >Save</button>
        <br />
        {savePending ? <Message classList="" loading={true} text="Saving on Spotify... " {...this.props} /> : null}
        {saveSuccess ? <Message classList="" success={true} text="Playlist successfully created.&nbsp;" {...this.props} /> : null}
        {saveFailure ? <Message classList="" error={true} text="Error: Playlist was not saved.&nbsp;" {...this.props} /> : null}
      </div>
    );
  }
}

export default SavePane;