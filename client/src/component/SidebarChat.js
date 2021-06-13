import { Avatar } from "@material-ui/core";
import React from "react";
import "../App.css";
import db from "../firebase";
import { Link } from "react-router-dom";
function SidebarChat({ id, name, addChat }) {
  const [seed, setSeed] = React.useState("");
  React.useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const createChat = () => {
    const name = prompt("enter name for chat");
    if (name) {
      db.collection("rooms").add({
        name: name,
      });
    }
  };
  return !addChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}
        />
        <div className="sidebarChat_info">
          <h2>{name}</h2>
          <p>last meassage</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add Chat</h2>
    </div>
  );
}

export default SidebarChat;
