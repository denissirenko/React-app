import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostContainer from './myPosts/myPostContainer';

function Profile(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPostContainer store={props.store} />
        </div>
    );
}
  
export default Profile;