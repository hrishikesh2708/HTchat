import { Avatar, IconButton } from "@material-ui/core";
import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import db from "../firebase";
function Chat() {
  const [seed, setSeed] = React.useState("");
  const [input, setInput] = React.useState("");
  const { roomId } = useParams();
  const [roomName, setroomName] = React.useState("");

  React.useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setroomName(snapshot.data().name));
    }
  }, [roomId]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log("you typed>>", input);
    setInput("");
  };

  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
        />
        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last Seen</p>
        </div>
        <div className="chat__headerRight">
          <IconButton size="small">
            <SearchIcon />
          </IconButton>
          <IconButton size="small">
            <AttachFileIcon />
          </IconButton>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
        <p className="chat__message">
          <span className="chat__name">Hrishikesh </span>
          hi
          <span className="chat__time">12:30 pm</span>
        </p>
        <p className="chat__message chat_reciever">
          <span className="chat__name">Hrishikesh </span>
          hi
          <span className="chat__time">12:30 pm</span>
        </p>
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            placeholder="Type a message"
            type="text"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button onClick={sendMessage} type="submit">
            send
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
