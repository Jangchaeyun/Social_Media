import React from 'react'
import LogoSearh from '../LogoSearch/LogoSearh'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import './ProfileLeft.css'

const ProfileLeft = () => {
  return (
    <div>
        <div className="ProfileLeft">
            <LogoSearh />
            <InfoCard />
            <FollowersCard />
        </div>
    </div>
  )
}

export default ProfileLeft
