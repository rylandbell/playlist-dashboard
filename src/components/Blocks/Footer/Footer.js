import React from 'react';
import './Footer.css';

const Footer = () =>
  <div className="footer">
    <ul className="list-inline">
      <li>
        <small>
          View project on&nbsp;
          <a
            href="https://github.com/rylandbell/spotify-features-filter"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </small>
      </li>
      <li>
        <small>
          Audio features data by&nbsp;
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify
          </a>
        </small>
      </li>
      <li>
        <small>
          Icons by&nbsp;
          <a
            href="https://icons8.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Icons8
          </a>
        </small>
      </li>
    </ul>
  </div>;

export default Footer;
