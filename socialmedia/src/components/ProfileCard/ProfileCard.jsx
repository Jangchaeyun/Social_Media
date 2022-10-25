import React from 'react'
import Cover from '../../img/cover.png';
import Profile from '../../img/profileImg.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  const ProfilePage = true;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>

      <div className="ProfileName">
        <span>CherrySally</span>
        <span>BCU Student</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>6,789</span>
            <span>팔로잉</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>4,567</span>
            <span>팔로워</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl">

              </div>
              <div className="follow">
                <span>3</span>
                <span>포스트</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>나의 프로필</span>}
    </div>
  );
};

export default ProfileCard
