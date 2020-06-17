import React from 'react';
import s from './ProfileInfo.module.scss';
import profileMainImg from './../../../img/header-content-bg.jpg';

function ProfileInfo() {
    return (
        <div>
            <img className={s.bg} src={profileMainImg} alt='img'/>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    );
}
  
export default ProfileInfo;