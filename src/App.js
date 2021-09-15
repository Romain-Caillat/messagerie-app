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
            <button type="button" style={{position: 'absolute', top: window.innerHeight / 4 + 110, left: (window.innerWidth / 2) - 20}} onClick={() => (dispatch(adduser({username})), setUsers(username))}> 
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

function Channel({user}) {
  const listofuser = useSelector(state => state.listuser.listuser);
  if (user === '') {
    return(
    <div>
      <Link to={`/login`} activeClassName="current">
        go to login
      </Link>
    </div>
    )
  } else {
    return(
      <div>
        {console.log(user)}
        <tr key={listofuser}/>
        <ul id="etc">
          {listofuser.map (users => {
            return showuser({users})
          })}
        </ul>
        <h4>actual user:   {user}</h4>
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