import React from 'react';
import "./login.css";
import {Button} from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { auth, provider } from './firebase';
import { login } from './features/appSlice';

function Login() {
    const dispatch = useDispatch();

    const signIn = ()=>{
      auth.signInWithPopup(provider)
      .then(result=>{
          dispatch(login({
              username: result.user.displayName,
              profilePic: result.user.photoURL,
              id: result.user.uuid,
          })
          );
      }).catch(error => alert(error.message));
    }

    return (
        <div className="login">
        <div className="login_container">
            <img src="https://www.freepnglogos.com/uploads/snapchat-icon-logo-png-15.png" alt="" />

            <Button variant='outline' onClick={signIn}>Sign in</Button>
        </div>
        </div>
    )
}

export default Login
