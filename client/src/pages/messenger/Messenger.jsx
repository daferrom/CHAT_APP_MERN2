import React, { useState } from 'react'
import Conversation from '../../components/conversations/Conversation'
//import Topbar from '../../components/topbar/Topbar'
import './messenger.css'
import Message from '../../components/message/Message'
import ChatOnline from '../../components/ChatOnline/ChatOnline'
import { useContext, useEffect } from 'react'
import { AuthContext} from '../../context/AuthContext'
import axios from 'axios'

export default function Messenger() {

    const [ conversations, setConversations] = useState([]);
    const { user } = useContext(AuthContext);

    console.log(user)
    
    useEffect(() => {
        const getConversations = async () => {
          try {
            const res = await axios.get("/conversations/" + user._id);
            console.log(res);
            setConversations(res.data)
          } catch (err) {
            console.log(err);
          }
        };
        //getConversations();
      }, [user._id]);

    return (
        <>
        <div className="messenger">
            <div className="chatmenu"></div>
                <div className="chatMenuWrapper">
                    <input placeholder="Busca a tus amigos" className ="chatMenuInput"></input>
                        {conversations.map((c) => (
                            <Conversation conversation={c} current={user}/>  
                        ))}             
                </div>
                
            <div className="chatBox"></div>
                <div className="chatBoxWrapper">
                    <div className="chatBoxTop">
                        <Message/>
                        <Message own={true}/>
                        <Message/>
                    </div>
                    <div className="chatBoxBottom">
                        <textarea className="chatMessageInput" placeholder="escribe tu mensaje"></textarea>
                        <button className="chatSubmitButton">Enviar</button>
                    </div>
                </div>

            <div className="chatOnline"></div>
                <div className="chatOnlineWrapper">
                    <ChatOnline/>
                </div>
        </div>
        </>
    )
}

