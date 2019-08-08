'use-strict';
import React from "react";
import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import disLike from '../assets/dislike.svg';


export default function main({ match }) {
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
