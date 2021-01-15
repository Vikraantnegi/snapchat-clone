import { Avatar } from '@material-ui/core';
import { ChatBubble, Search } from '@material-ui/icons';
import React from 'react';
import './Chats.css';

const Chats = () => {
    return(
      <div className="chats-screen">
        <div className="chats-header">
            <Avatar className="chats-avatar" />
            <div className="chats-search">
                <Search className="chats-search-icon" />
                <input type="text" placeholder="Friends" />
            </div>
            <ChatBubble className="chats-chat-icon" />
        </div>
      </div>  
    );
}

export default Chats;