import React, { useEffect, useState } from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";
import {
  SearchOutlined,
  AttachFile,
  MoreVert,
  InsertEmoticon,
  Mic as MicIcon,
} from "@material-ui/icons";
import { useParams } from "react-router-dom";
import db from "./firebase";

function Chat() {
  const [input, setInput] = useState("");
  const { roomId } = useParams();
  const { seed } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      const unsubscribe = db
        .collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

      return () => {
        unsubscribe();
      };
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(`you typed ${input}`);
    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        {roomId ? (
          <>
            <Avatar
              src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
            />
            <div className="chat__headerInfo">
              <h3>{roomName}</h3>
              <p>Last seen at ...</p>
            </div>
          </>
        ) : (
          <div className="chat__headerInfo"></div>
        )}

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        <p className={`chat__message ${true && "chat__reciever"}`}>
          <span className="chat__name">Sonny Kiss</span>
          Hello, hey guys
          <span className="chat__timestamp">4:00am</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type a message"
          />
          <button onClick={sendMessage} type="submit">
            Send a message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
