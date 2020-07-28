import React from 'react';

import './Menu.css';

import Logo from '../../assets/img/Logo.png';

// import ButtonLink from './components/ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="AluraFlix Logo" />
      </a>

      {/* <ButtonLink className="ButtonLink" href="/">
        Novo vídeo
      </ButtonLink> */}
      <Button as="a" className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
