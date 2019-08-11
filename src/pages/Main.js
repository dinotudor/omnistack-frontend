'use-strict';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import io from 'socket.io-client';
import './Main.css';


import api from './../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import disLike from '../assets/dislike.svg';
import itsamatch from './../assets/itsamatch.png';


export default function Main({ match }) {
  const [users, setUsers] = useState([]);
  const [matchDev, setMatchDev] = useState(true)

  useEffect(() => {
    async function loadUsers(){
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
       })

       setUsers(response.data)
    }
    loadUsers();
  }, [match.params.id]);

  useEffect(() => {
    const socket = io('http://localhost:3333', {
      query: { user: match.params.id }
    });
    socket.on('match', dev => {
      console.log(dev);
    })

  }, [match.params.id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: match.params.id }
    })
    setUsers(users.filter(user => user._id !== id ));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislikes`, null, {
      headers: { user: match.params.id }
    })
    setUsers(users.filter(user => user._id !== id ));
  }

  return (
  <div className="main-container">
    <Link to="/">
      <img src={logo} alt="logo" />
    </Link>
      { users.length > 0 ? (
        <ul>
          { users.map(user => (
          <li key={user._id}>
            <img src={user.avatar} alt="avatar" />
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </footer>
            <div className="buttons">
              <button type="button" onClick={() => handleLike(user._id)}>
                <img src={like} alt="like" />
              </button>
              <button type="button" onClick={() => handleDislike(user._id)}>
                <img src={disLike} alt="like" />
              </button>
            </div>
          </li>
          ))}
        </ul>
      ) : (
        <div className="empty">Acabou : (</div>
      ) }

      { matchDev && (
        <div className="match-container">
          <img src={itsamatch} alt=""/>
          <img className="avatar" src="https://avatars2.githubusercontent.com/u/31296766?v=4" alt=""/>
          <strong>Dino Tudor</strong>
          <p>Bio</p>
          <button type="button">Fechar</button>
        </div>
      ) }

  </div>
  )
}
