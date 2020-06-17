import React from 'react';
import s from './myPost.module.css';
import Post from './post/Post';

function MyPost(props) { 
    

    let postsElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount} /> );
    

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.myPostWrap}>
            My MyPost
            <div>
                <textarea
                    onChange={onPostChange} 
                    ref={newPostElement} 
                    value={props.newPostText}/>
                <button onClick={ onAddPost }>Add post</button>
            </div>
            { postsElements }
        </div>
    );
}
  
export default MyPost;