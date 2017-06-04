import React from 'react';
import './Message.css';

const Message = ({ classList, success, error, text, loading }) => {
  classList = classList || '';
  return (
    <div className="text-center">
      <div className={'message ' + classList}>
        {success && <i className="fa fa-check">&nbsp;</i>}
        {error && <i className="fa fa-exclamation-triangle">&nbsp;</i>}
        {text || null}
        {loading && <i className="fa fa-spinner fa-spin fa-fw" />}
      </div>
    </div>
  );
};

export default Message;
