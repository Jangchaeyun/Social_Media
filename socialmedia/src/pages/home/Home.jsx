import React from 'react';
import ProfileSide from '../../components/profile/ProfileSide';
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
      <div className="profileSide">
        <ProfileSide />
      </div>
      <div className="postSide">게시물</div>
      <div className="RightSide">RightSide</div>
    </div>
  );
}

export default Home;
