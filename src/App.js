import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import fondlogin from './img/loginfond.jpg'
import { useDispatch } from 'react-redux'
import login from './Userslice'

function Login() {
  var username = ""
  var password = ""
  const dispatch = useDispatch()
    return (
        <div style={{margin: 0, padding: 0}}>
            <img src={fondlogin} style={{ width: window.innerWidth, height: window.innerHeight, margin: 0, padding: 0, position: 'absolute'}}/>
            <h2 style={{position: 'absolute', top: window.innerHeight / 4, left: (window.innerWidth / 2) - 30}}>
              LOGIN
            </h2>
            <input type="text" name="username" placeholder="Enter Username" onChange={(evt) => { username = evt.target.value }} style={{position: 'absolute', top: window.innerHeight / 4 + 50, left: (window.innerWidth / 2) - 70}} />
            <input type="text" name="username" placeholder="Enter Password" onChange={(evt) => { password = evt.target.value }} style={{position: 'absolute', top: window.innerHeight / 4 + 80, left: (window.innerWidth / 2) - 70}} />
            <button type="button" style={{position: 'absolute', top: window.innerHeight / 4 + 110, left: (window.innerWidth / 2) - 20}} onClick={() => dispatch(login(username, password))}>
              login
            </button>
        </div>
    )
}

export default function App() {
    return (
        <Router>
          <div style={{margin: 0, padding: 0}}>
            <Login/>
          </div>
        </Router>
    )
  }