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
  }

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

  /* ================= 햄버거 ================= */
  .Burger {
    position: absolute;
    right: 10%;
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    /* z-index: 10; */
  }

  .line{
    width: 2rem;
    height: 0.2rem;
    background-color: white;
    border-radius: 2px;
  }
  
  /* 사이드 모달 */
  .sideOpen {
    display: block;
    width: 100px;
    height: 100px;
    background-color: white;
  }

  .sideClose {
    display: none;
  }

  /* 반응형 */
  @media (max-width: 768px) {
      /* https://codesandbox.io/s/github/sidbentifraouine/react-responsive-animated-header?file=/src/components/Header.js */
      /* https://codepen.io/codebucks27/details/yLMvOPX */
      /* https://codepen.io/maximakymenko/pen/aboWJpX?editors=0110 */
      li {
        display: none;
      }
      .Burger {
        display: flex;
        background-color: black;
      }

  }
`



const Header = () => {
    // 햄버거메뉴 상태관리
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const Close = () => setClick(false);

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
                <button onClick={handleClick} className="Burger">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </button>
                {/* 사이드모달 */}
                <div className={click ? "sideOpen" : "sideClose"}>
                  test
                </div>
              </ul>
            </nav>
          </HeaderNav>
        </>
    );
};

export default Header;