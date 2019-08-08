'use-strict'
import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/logo.svg';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handelSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      username,
    });

    const { _id } = response.data;
    console.log(_id)

      history.push(`/dev/${_id}`);
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
