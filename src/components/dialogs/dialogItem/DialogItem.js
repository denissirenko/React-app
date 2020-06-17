import React from 'react'
import s from './../dialogs.module.scss';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    const path = "/dialogs/" + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}
  
export default DialogItem;