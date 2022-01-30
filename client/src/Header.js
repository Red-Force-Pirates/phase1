import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import logo from "../src/assets/img/logo.png"
import { useEffect, useState } from 'react';


const HeaderNav = styled.div`

  background-color: black;

  nav {
    /* padding-top: 20px;  */
    padding-left: 7%;
    padding-right: 7%;
    /* background-color: black; */
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    /* background-color: black; */
  }

  li {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 12px;
      /* padding-top: 12px; */
      /* background-color: black; */
  }

  /* li:hover {
      background-color: #070b4a;
      transform: scale(1.1);
      transition: all 0.1s linear;
      p {
        color: white;
      }
  } */

  p {
    color: white;
  }

  /* 밑줄 제거 */
  a {
    text-decoration: none;
  }

  /* 폰트 */
  font-family: 'Roboto', sans-serif;
  font-family: 'Rock Salt', cursive;

  /* 로고 */
  .LogoImg {
    padding-right: 24px;
    display: flex;
    width: 48px;
  }
`



const Header = () => {
    // 로그인 상태 관리
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
      if(sessionStorage.getItem('user_id') === null){
        // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
          console.log('isLogin ? :: ', isLogin)
      } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
        setIsLogin(true)
        console.log('isLogin ? :: ', isLogin)
      }
    })

    // 로그인 상태 -> Logout탭 노출, 비로그인 상태 -> Login 탭 노출
    
    return (
        <>
          <HeaderNav>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto:wght@900&family=Rock+Salt&display=swap" rel="stylesheet" />
            <nav>
              <ul>
                <NavLink to="/" ><img alt="test" className="LogoImg" src={logo}/></NavLink>
                <li><NavLink to="/roadmap" ><p>ROADMAP</p></NavLink></li>
                <li><NavLink to="/crew" ><p>CREW</p></NavLink></li>
                <li><NavLink to="/callendar" ><p>CALLENDAR</p></NavLink></li>
                <li><NavLink to="/bounty" ><p>BOUNTY</p></NavLink></li>
                <li><NavLink to="/vault" ><p>VAULT</p></NavLink></li>
                <li><NavLink to="/tavern" ><p>TAVERN</p></NavLink></li>
                {/* <li style={ isLogin ? { display: 'none' } : { display: 'inline-flex' }}><NavLink to="/login" ><p>Login</p></NavLink></li>
                <li style={ isLogin ? { display: 'inline-flex' } : { display: 'none' }}><NavLink to="/logout" ><p>Logout</p></NavLink></li> */}
              </ul>
            </nav>
          </HeaderNav>
        </>
    );
};

export default Header;