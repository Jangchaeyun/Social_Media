import React from 'react'
import { Followers } from '../../Data/FollowersData'
import './FollowersCard.css'

const FollowCards = () => {
  return (
    <div className='FollowersCard'>
      <h3>누가 당신을 팔로우하고 있나요</h3>

      {Followers.map((follower, id) => {
        return(
          <div className="follower">
            <div>
              <img src={follower.img} alt="" className='followerImg'/>
              <div className='name'>
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className='button fc-button'>
              팔로우
            </button>
          </div>
        )
      })}
    </div>
  )
}

export default FollowCards
