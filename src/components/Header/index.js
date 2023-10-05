import React from 'react';
import './header.css';
import { useNavigate } from 'react-router';

function Header({ prop }) {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <h2 onClick={() => navigate('/')}>WonderDocs<span><p>.</p></span></h2>
        {prop ? (
          <button onClick={() => navigate('/upload-pdf-get-answer')}>Explore</button>
        ) : (
          <></>
        )}
      </header>
    </div>
  );
}

export default Header;
