import React from 'react';
import LogoSearh from '../LogoSearch/LogoSearh';
import ProfileCard from '../ProfileCard/ProfileCard';
import './ProfileSide.css'

const ProfileSide = () => {
  return (
    <div>
      <div className="ProfileSide">
        <LogoSearh />
        <ProfileCard />
      </div>
    </div>
  );
}

export default ProfileSide;
