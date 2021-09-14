import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import fondlogin from './img/loginfond.jpg'
import { useDispatch } from 'react-redux'
import { adduser, listofuser } from './Userslice'

function Login() {
  var username = "pas def"
  const dispatch = useDispatch()
    return (
        <div style={{margin: 0, padding: 0}}>
            <img src={fondlogin} style={{ width: window.innerWidth, height: window.innerHeight, margin: 0, padding: 0, position: 'absolute'}} alt="login"/>
            <h2 style={{position: 'absolute', top: window.innerHeight / 4, left: (window.innerWidth / 2) - 30}}>
              LOGIN
            </h2>
            <input type="text" name="username" placeholder="Enter Username" onChange={(evt) => { username = evt.target.value }} style={{position: 'absolute', top: window.innerHeight / 4 + 50, left: (window.innerWidth / 2) - 70}} />
            <button type="button" style={{position: 'absolute', top: window.innerHeight / 4 + 110, left: (window.innerWidth / 2) - 20}} onClick={() => dispatch(adduser({username}))}>
              <Link to={`/`} activeClassName="current">
                login
              </Link>
            </button>
        </div>
    )
}

function Channel() {
  return(
  <div>
    <Link to={`/login`} activeClassName="current">
      go to login
    </Link>
    <li>{listofuser}</li>
  </div>)
}

function SwitchRouter() {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/">
        <Channel />
      </Route>
    </Switch>
  )
}

export default function App() {
    return (
        <Router>
          <div style={{margin: 0, padding: 0}}>
            <SwitchRouter/>
          </div>
        </Router>
    )
  }