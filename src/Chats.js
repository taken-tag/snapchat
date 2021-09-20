import React, {useState, useEffect}  from 'react'
import "./chats.css"
import {Avatar} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Chat from './Chat';
import {auth, db} from "./firebase"
import { useDispatch, useSelector } from 'react-redux';
import {selectUser} from "./features/appSlice"
import RadioButtonUncheckedOutlinedIcon from '@material-ui/icons/RadioButtonUncheckedOutlined';
import { useHistory } from 'react-router-dom';
import { resetCameraImage } from './features/cameraSlice';

function Chats() {
    const [posts, setPosts]= useState([]);
    const user = useSelector(selectUser);
    const dispatch = useDispatch()
    const history = useHistory()


    useEffect(() => {
       db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot=> setPosts(snapshot.docs.map(doc=>({
         id: doc.id,
         data: doc.data(),

       }))
       )
       );
    }, []);

    const takeSnap=()=>{
        dispatch(resetCameraImage())
         history.push("/")
    }

    


    return (
        <div className="chats">
        <div className="chats_header">
             <Avatar src={user.profilePic} onClick={()=> auth.signOut()} className="chats_avatar"/>
             <div className="chats_search">
                 <SearchIcon className="chats_searchIcon"/>
                 <input placeholder="Friends" type="text" />
             </div>
             <ChatBubbleIcon className="chats_chatIcon"/>
        </div>
                <div className="chat_posts">
                     {posts.map(({id, data: {profilePic, username, timestamp, imageUrl, read}})=>(
                          <Chat
                              key={id}
                              id={id}
                              username={username}
                              timestamp={timestamp}
                              imageUrl={imageUrl}
                              read={read}
                              profilePic={profilePic}
                          />

                     ))}
                </div>            
                <RadioButtonUncheckedOutlinedIcon
                    className="chats_takePicIcon"
                    onClick={takeSnap}
                    font-size="large"
                />                
        </div>
    )
}

export default Chats
