// ShareButton.tsx
import React from 'react';

import './ShareButton.css';
import { FaSquareFacebook, FaInstagram,FaTwitter } from "react-icons/fa6";

const ShareButton = () => {
  return (
    <div className="share-button-container">
      <div className='sharebutton-title'>Share this article</div>
      <div className="icon-container">
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
        <FaSquareFacebook className="icon" />
      </div>
    </div>
  );
};

export default ShareButton;


