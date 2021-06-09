import { Avatar } from '@material-ui/core';
import React from 'react'
import "../App.css";
function SidebarChat({addChat}) {
    const [seed,setSeed] = React.useState("")
    const createChat = () => {};
    React.useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])
    return !addChat ? (
        <div className="sidebarChat">
            <Avatar  src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
            <div className="sidebarChat_info">
                <h2>Room name</h2>
                <p>last meassage</p>
            </div>
        </div>
    ):(
        <div onClick={createChat} className="sidebarChat">
            <h2>Add Chat</h2>
        </div>
    )
}

export default SidebarChat
