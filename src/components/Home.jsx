import React from "react";
import "../css/index.css";

export const Home = () => {
  return (
    <div class="container">
      <div class="navbar">
        <ul>
          <li>
            <a class="active" href="#home">
              Home
            </a>
          </li>
          <li class="rainbow">
            <a href="#">News</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <br />
      <div class="content">
        <div class="house">
          <button>
            <a href="/upload">SELL</a>
          </button>
        </div>
        <div class="house">
          <button>
            <a href="/">REQUEST</a>
          </button>
        </div>
      </div>
    </div>
  );
};
