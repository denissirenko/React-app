import React from 'react';
import logo from './../../logo.svg';
import s from './header.module.css'

function Header() {
    return (
        <header className={s.app_header}>
            <div className="container"> 
            <img src={logo} className="app-logo" alt="logo" />
            </div>
        </header>
    );
}
  
export default Header;