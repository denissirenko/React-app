import React from 'react';
import Ava from './img/ava.jpg'
import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.PostItem}>
            <img className={s.post_item_img} src={Ava} alt='img' />
            <span>
                {props.message}
            </span>
            <div>like {props.likesCount}</div>
        </div>
    );
}
  
export default Post;