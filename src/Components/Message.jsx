import React from "react";
import "./message.css";

const Message = ({ message, timestamp, user, userImage }) => {
  return (
    <div className="message">
      <img
        src={
          userImage
            ? userImage
            : "https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder.jpg"
        }
        alt={user}
      />
      <div className="message-info">
        <h4 className="message_user">
          {user}
          {""}
          <small className="message_timestamp">
            {new Date(timestamp?.toDate()).toUTCString()}
          </small>
        </h4>
        <p className="message_message">{message ? message : ""}</p>
      </div>
    </div>
  );
};

export default Message;
