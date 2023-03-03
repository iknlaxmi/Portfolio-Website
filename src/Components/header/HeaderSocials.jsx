import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FiGithub } from 'react-icons/fi';

function HeaderSocials() {
  return (
    <div className="header_socials">
      <a href="https://www.linkedin.com/in/naglakshmikongara/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/iknlaxmi" target="_blank">
        <FiGithub />
      </a>
    </div>
  );
}

export default HeaderSocials;
