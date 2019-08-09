'use-strict';
import React, { useEffect } from "react";
import './Main.css';

import api from './../services/api';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import disLike from '../assets/dislike.svg';


export default function Main({ match }) {
  useEffect(() => {
    async function loadUsers(){
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
       })

       console.log('USERS',response.data)
    }
    loadUsers();
  }, [match.params.id]);

  return <div className="main-container">
    <img src={logo} alt="logo" />
    <ul>
      <li>
        <img src="https://avatars2.githubusercontent.com/u/31296766?v=4" alt="avatar" />
        <footer>
          <strong>Dino Tudor</strong>
          <p>desenvolvedor em desenvolvimento</p>
        </footer>
        <div className="buttons">
          <button type="button">
            <img src={like} alt="like" />
          </button>
          <button type="button">
            <img src={disLike} alt="like" />
          </button>
        </div>
      </li>
      <li>
        <img src="https://avatars2.githubusercontent.com/u/31296766?v=4" alt="avatar" />
        <footer>
          <strong>Dino Tudor</strong>
          <p>desenvolvedor em desenvolvimento</p>
        </footer>
        <div className="buttons">
          <button type="button">
            <img src={like} alt="like" />
          </button>
          <button type="button">
            <img src={disLike} alt="like" />
          </button>
        </div>
      </li>
      <li>
        <img src="https://avatars2.githubusercontent.com/u/31296766?v=4" alt="avatar" />
        <footer>
          <strong>Dino Tudor</strong>
          <p>desenvolvedor em desenvolvimento</p>
        </footer>
        <div className="buttons">
          <button type="button">
            <img src={like} alt="like" />
          </button>
          <button type="button">
            <img src={disLike} alt="like" />
          </button>
        </div>
      </li>
      <li>
        <img src="https://avatars2.githubusercontent.com/u/31296766?v=4" alt="avatar" />
        <footer>
          <strong>Dino Tudor</strong>
          <p>desenvolvedor em desenvolvimento</p>
        </footer>
        <div className="buttons">
          <button type="button">
            <img src={like} alt="like" />
          </button>
          <button type="button">
            <img src={disLike} alt="like" />
          </button>
        </div>
      </li>
    </ul>
  </div>
}
