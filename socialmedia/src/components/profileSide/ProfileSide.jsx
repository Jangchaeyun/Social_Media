import React from 'react';
import LogoSearh from '../LogoSearch/LogoSearh';
import ProfileCard from '../ProfileCard/ProfileCard';
import FollowersCard from '../FollowersCard/FollowersCard';
import './ProfileSide.css'

const ProfileSide = () => {
  return (
    <div>
      <div className="ProfileSide">
        <LogoSearh />
        <ProfileCard />
        <FollowersCard />
      </div>
    </div>
  );
}

export default ProfileSide;
