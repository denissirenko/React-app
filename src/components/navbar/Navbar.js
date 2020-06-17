import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './navbar.module.css'

function Navbar() {
    return (
        <nav className={s.app_menu}>
            <ul>
                <li><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
                <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
                <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
                <li><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}
  
export default Navbar;