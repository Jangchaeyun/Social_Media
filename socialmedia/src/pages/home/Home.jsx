import React from 'react';
import './Home.css'
import ProfileSide from '../../components/profileSide/ProfileSide'

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
