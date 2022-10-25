import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className="Auth">
        <div className="a-left">
            <img src={Logo} alt="" />
            <div className="Webname">
                <h1>OrangeTwitt</h1>
                <h6>전세계에 무슨일이 일어나고 있나요?</h6>
            </div>
        </div>
        <LogIn />
    </div>
  )
}

function LogIn() {
    return (
      <div className="a-right">
        <form className="infoForm authForm">
          <h3>Log In</h3>
  
          <div>
            <input
              type="text"
              placeholder="사용자 이름"
              className="infoInput"
              name="username"
            />
          </div>
  
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="비밀번호"
              name="password"
            />
          </div>
  
          <div>
              <span style={{ fontSize: "12px" }}>
              계정이 없습니다. 회원가입가입하시겠습니까?
              </span>
            <button className="button infoButton">Login</button>
          </div>
        </form>
      </div>
    );
  }

function SignUp() {
    return(
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>회원가입</h3>
                <div>
                    <input
                        type="text"
                        placeholder='First Name'
                        className='infoInput'
                        name='firstname'
                    />
                    <input
                        type="text"
                        placeholder='Last Name'
                        className='infoInput'
                        name='lastname'
                    />
                </div>

                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name='username'
                        placeholder='사용자 이름'
                    />
                </div>
                
                <div>
                    <input
                        type="text"
                        className="infoInput"
                        name="password"
                        placeholder='비밀번호'
                    />
                    <input
                        type="text"
                        className="infoInput"
                        name="confirmpassword"
                        placeholder='비밀번호 확인'
                    />
                </div>
                <div>
                    <span style={{fontSize: '12px'}}>이미 계정이 있습니까? 로그인!</span>
                </div>
                <button className="button infoButton" type='submit'>
                    회원가입
                </button>
            </form>
        </div>
    )
}

export default Auth
