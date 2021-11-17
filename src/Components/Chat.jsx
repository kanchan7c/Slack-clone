import React, { useEffect, useState } from "react";
import "./chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import db from "../firebase";
import Message from "./Message";
import ChatInput from "./ChatInput";

const Chat = () => {
  const { roomID } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);
  const [roomMessages, setRoomMessages] = useState([]);

  useEffect(() => {
    if (roomID) {
      db.collection("rooms")
        .doc(roomID)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }

    db.collection("rooms")
      .doc(roomID)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setRoomMessages(snapshot.docs.map((doc) => doc.data()))
      );
  }, [roomID]);

  //   console.log(roomMessages);

  return (
    <div className="chat">
      <div className="chat_header">
        <div className="chat_header-left">
          <h4 className="chat_channel-name">
            <strong>#{roomDetails?.name}</strong>
            <StarBorderOutlined />
          </h4>
        </div>
        <div className="chat_header-right">
          <p>
            <InfoOutlined /> Details
          </p>
        </div>
      </div>
      <div className="chat_messages">
        {roomMessages.map(({ message, timestamp, user, userImage }) => (
          <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
            key={timestamp}
          />
        ))}
      </div>

      <ChatInput channelName={roomDetails?.name} channelId={roomID} />
    </div>
  );
};

export default Chat;
