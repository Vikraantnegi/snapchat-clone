import { Avatar } from '@material-ui/core';
import { ChatBubble, Search } from '@material-ui/icons';
import React, {useState, useEffect} from 'react';
import { db } from '../../firebase';
import './Chats.css';

const Chats = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        db.collection('posts').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => (
                setPosts(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data(),
                })))
            ))
    })
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
        <div className="chats-content">

        </div>
      </div>  
    );
}

export default Chats;