import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import fondlogin from './img/loginfond.jpg'
import { useDispatch, useSelector } from 'react-redux'
import { adduser } from './Userslice'
import { addmessage } from './Chatslice'

function Login({user, setUsers}) {
  var username = "pas def"
  const dispatch = useDispatch()
    return (
        <div style={{margin: 0, padding: 0}}>
            <img src={fondlogin} style={{ width: window.innerWidth, height: window.innerHeight, margin: 0, padding: 0, position: 'absolute'}} alt="login"/>
            <h2 style={{position: 'absolute', top: window.innerHeight / 4, left: (window.innerWidth / 2) - 30}}>
              LOGIN
            </h2>
            <input type="text" name="username" placeholder="Enter Username" onChange={(evt) => { username = evt.target.value }} style={{position: 'absolute', top: window.innerHeight / 4 + 50, left: (window.innerWidth / 2) - 70}} />
            <button type="button" style={{position: 'absolute', top: window.innerHeight / 4 + 110, left: (window.innerWidth / 2) - 20}} onClick={() => { 
              dispatch(adduser({username})); 
              setUsers(username);
            }}> 
              <Link to={`/`} activeClassName="current">
                login
              </Link>
            </button>
        </div>
    )
}

function showuser({users}) {
  return(
    <li >{users}</li>
  )
}

function showmessage({message}) {
  return(
    <li >{message}</li>
  )
}

function Channel({user}) {
  const listofuser = useSelector(state => state.listuser.listuser);
  const generalchat = useSelector(state => state.listmessage.listmessage);
  var message = "notdefined";
  const dispatch = useDispatch();
  if (user === '') {
    console.log(generalchat);
    return(
    <div>
      <Link to={`/login`} activeClassName="current">
        go to login
      </Link>
    </div>
    )
  } else {
    var a = user.length
    return(
      <div>
        <tr key={listofuser}/>
        <ul id="etc" style={{position: 'absolute'}}>
          {listofuser.map (users => {
            return showuser({users})
          })}
        </ul>
        <tr key={listofuser}/>
        <ul id="etc" style={{position: 'absolute', left: (window.innerWidth / 2) - 120}}>
          {generalchat.map (message => {
            return showmessage({message})
          })}
        </ul>
        <input type="text" name="message" placeholder="Enter message" onChange={(evt) => { message = user.concat(": ", evt.target.value) }} style={{position: 'absolute', top: window.innerHeight / 1.2 + 110, left: (window.innerWidth / 2) - 70}} />
        <button type="button" style={{position: 'absolute', top: window.innerHeight / 1.2 + 110, left: (window.innerWidth / 2) + 120}} onClick={() => { 
          dispatch(addmessage({message})); }}> 
          <Link to={`/`} activeClassName="current">
            Enter
          </Link>
        </button>
        <h4 style={{position: 'absolute', left: (window.innerWidth - (a * 8)), fontSize: 16 }} >{user}</h4>
        {console.log(window.innerWidth - a * 7)}
      </div>
      )
  }
}

function SwitchRouter({user, setUsers}) {
  return (
    <Switch>
      <Route path="/login">
        <Login user={user} setUsers={setUsers}/>
      </Route>
      <Route path="/">
        <Channel user={user}/>
      </Route>
    </Switch>
  )
}

export default function App() {
  const [user, setUsers] = useState('');
    return (
        <Router>
          <div style={{margin: 0, padding: 0}}>
            <SwitchRouter user={user} setUsers={setUsers}/>
          </div>
        </Router>
    )
  }