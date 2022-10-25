import React from 'react';
import './Login.css';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';
import { handleFbSignIn, handleGoogleSignIn, handleGoogleSignOut, userSignInForm, userSignUpForm, initializeUserLogin } from './firebaseLoginManager';


function Login() {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    let { from } = location.state || { from: {pathname: '/shipment'} };


    const [newUser, setNewUser] = useState(false)
    const [ user, setUser ] = useState({
        isSignedIn : false,
        name : '',
        email : '',
        password : '',
        userImage : '',
        text : '',
        error : '',
        success : false
    });

    initializeUserLogin();

    const handleRedirect = (res, redirect) =>{
        setUser(res)
        setLoggedInUser(res)
        if(redirect){
            navigate(from)
        }
    }

    const googleSignIn = () =>{
        handleGoogleSignIn()
        .then(res =>{
            handleRedirect(res, true);
        })
    }

    const googleSignOut = () =>{
        handleGoogleSignOut()
        .then(res => {
            handleRedirect(res, false)
        })
    }

    const fbSignIn = () =>{
        handleFbSignIn()
        .then(res =>{
            handleRedirect(res, true)
        })
    }

    const handleBlur = (e) =>{
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const passLength = e.target.value.length > 5;
            const isPasswordValid = /\d{1}/.test(e.target.value);
            isFieldValid = passLength && isPasswordValid;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    const handleText = () =>{
        const newUserInfo = {...user};
        newUserInfo.text = true;
        setUser(newUserInfo);
    }
    
    const handleFormSubmit = (e) =>{
        if(newUser && user.email && user.password){
            userSignUpForm(user.name, user.email, user.password)
            .then(res =>{
                handleRedirect(res, true)
            })
        }
        if(!newUser && user.email && user.password){
            userSignInForm(user.email, user.password)
            .then(res =>{
                handleRedirect(res, true)
            })
        }
        e.preventDefault();
    }

  return (
    <div className="Login">
      {
        user.isSignedIn ? <button onClick={googleSignOut}>Sign Out </button> :
                          <button onClick={googleSignIn}>Sign In </button>
      }
      <br />
      <button onClick={fbSignIn}> Sign in with Facebook</button>
      <br />
      <br />
      <span><input type="checkbox" name="newUser" onChange={() => setNewUser(!newUser)} id="" />New User Register</span>
      <form action="" onSubmit={handleFormSubmit}>
        {newUser && <input type="text" onBlur={handleBlur} placeholder='Enter your name....' name="name" id="userName" />}
        <br /><br />
        <input type="email" onBlur={handleBlur} placeholder='Enter your email....' name="email" id="email" required />
        <br /><br />
        <input type="password" onBlur={handleBlur} onChange={handleText} placeholder='Enter password....' name="password" id="pass" required />
        <br />
        {
          user.password ? <span className='pass-text green-text'>***must include a digit and 6 character***</span> :
                      <span className='pass-text red-text'>***must include a digit and 6 character***</span>
        }
        <br /><br />
        <button type='submit'>{newUser ? 'Sign Up' : 'Sign in'}</button>
      </form>

      <p className="error-message">{user.error}</p>
      {user.success && <p className="success-message">User {newUser ? 'created' : 'Logged In'} successfully</p>}

    </div>
  );
}

export default Login;