import React from 'react'
import './InfoCard.css'
import { UilPen } from '@iconscout/react-unicons'

const InfoCard = () => {
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <h4>나의 정보</h4>
            <div>
                <UilPen width='2rem' height='1.2rem'/>
            </div>
        </div>
        <div className="info">
            <span>
                <b>상태 </b>
            </span>
            <span>관계</span>
        </div>
        <div className="info">
            <span>
                <b>거주지 </b>
            </span>
            <span>부천</span>
        </div>
        <div className="info">
            <span>
                <b>대학 </b>
            </span>
            <span>부천대학교</span>
        </div>

        <button className='button logout-button'>
            로그아웃
        </button>
    </div>
  )
}

export default InfoCard
