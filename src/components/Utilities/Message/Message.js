import React, { Component } from 'react';
import './Message.css';

class Message extends Component {
  render() {
    const classList = this.props.classList || "";
    return (
      <div className="text-center">
        <div className={"message " + classList}>
          {this.props.success ? <i className="fa fa-check">&nbsp;</i> : null}
          {this.props.error ? <i className="fa fa-exclamation-triangle">&nbsp;</i> : null}
          {this.props.text || null}
          {this.props.loading ? <i className="fa fa-spinner fa-spin fa-fw"></i> : null}
          
        </div>
      </div>
    );
  }
}

export default Message;