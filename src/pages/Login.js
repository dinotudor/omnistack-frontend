'use-strict'
import React, { useState } from 'react';

import logo from '../assets/logo.svg';
import './Login.css'

export default function Login() {
  const [ username, setUsername ] = useState('');

  function handelSubmit(e) {
    e.preventDefault();
    console.log(username)
  }

  return (
    <div className="login-container">
      <form onSubmit={handelSubmit}>
        <img src={logo} alt="Logo Tindev"/>
        <input
          placeholder="digite se usuário no GitHib"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

