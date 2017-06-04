import React from 'react';
import './About.css';

// import {Dialog, Button} from 'react-toolbox/lib/dialog';
import Dialog from 'react-toolbox/lib/dialog/Dialog';
import Button from 'react-toolbox/lib/button/Button';

class DialogTest extends React.Component {
  state = {
    active: false
  };

  handleToggle = () => {
    this.setState({ active: !this.state.active });
  };

  actions = [
    { label: 'Cancel', onClick: this.handleToggle },
    { label: 'Save', onClick: this.handleToggle }
  ];

  render() {
    return (
      <div>
        <Button label="Show my dialog" onClick={this.handleToggle} />
        <Dialog
          actions={this.actions}
          active={this.state.active}
          onEscKeyDown={this.handleToggle}
          onOverlayClick={this.handleToggle}
          title="My awesome dialog"
        >
          <p>
            Here you can add arbitrary content. Components like Pickers are
            using dialogs now.
          </p>
        </Dialog>
      </div>
    );
  }
}

const About = () =>
  <div className="about">
    <a href="">About</a>
  </div>;

export default DialogTest;
