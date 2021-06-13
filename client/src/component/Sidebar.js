import React from "react";
import "../App.css";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MessageIcon from "@material-ui/icons/Message";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SidebarChat from "./SidebarChat";
import db from "../firebase";
// import addChat from "./SidebarChat";

function Sidebar() {
  const [room, setRoom] =React.useState([])
  React.useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot( snapshot => (
      setRoom(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    ))
    return () => {
      unsubscribe();
    }
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton size="small">
            <DonutLargeIcon />
          </IconButton>
          <IconButton size="small">
            <MessageIcon />
          </IconButton>
          <IconButton size="small">
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="Search chat" type="text" />
        </div>
      </div>
      <div className="sidebar__chat">
      <SidebarChat addChat/>
      {room.map(room => (
        <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
      ))}
      </div>
    </div>
  );
}

export default Sidebar;
