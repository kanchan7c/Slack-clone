import React, { useEffect, useState } from "react";
import "./chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@mui/icons-material";
import db from "../firebase";

const Chat = () => {
  const { roomID } = useParams();
  const [roomDetails, setRoomDetails] = useState(null);

  useEffect(() => {
    if (roomID) {
      db.collection("rooms")
        .doc(roomID)
        .onSnapshot((snapshot) => setRoomDetails(snapshot.data()));
    }
  }, [roomID]);

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
    </div>
  );
};

export default Chat;
