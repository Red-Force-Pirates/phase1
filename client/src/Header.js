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
    padding-left: 4vw;
  }

  li {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 1.2vw;
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
    display: none;
    width: 160px;
    height: 100%;
    background-color: black;
    position: fixed;
    right: 0%;
    z-index: 5;
  }
  .sideOpen.active {
    display: none;
  }

  .sideClose {
    display: none;
  }
  
  /* 사이드네비바 X버튼 */
  .exitBtn {
    width: 40px;
    height: 40px;
    position: fixed;
    background-color: rgba( 255, 255, 255, 0 );
    border: none;
    top: 0;
    cursor: pointer;
  }

  .exitBtn1 {
    width: 1.6rem;
    height: 0.2rem;
    background-color: white;
    border-radius: 2px;
    position: fixed;
    right: 128px;
    top: 16px;
    transform-origin : bottom;
    transform: rotate(45deg);
  }
  .exitBtn2 {
    width: 1.6rem;
    height: 0.2rem;
    background-color: white;
    border-radius: 2px;
    position: fixed;
    right: 128px;
    top: 14px;
    transform-origin : bottom;
    transform: rotate(135deg);
  }
  /* 사이드네비바 내부 */
  .sideUl {
    /* background-color: cadetblue; */
    position: fixed;
    top: 40px;
    right: 20px;
    width: 100px;
    height: 200px;
    display: block;
  }

  .sideList {
    /* background-color: red; */
    width: 100px;
    height: 20%;
  }

  /* 반응형 */
  @media (max-width: 768px) {
      /* https://codesandbox.io/s/github/sidbentifraouine/react-responsive-animated-header?file=/src/components/Header.js */
      /* https://codepen.io/codebucks27/details/yLMvOPX */
      /* https://codepen.io/maximakymenko/pen/aboWJpX?editors=0110 */
      /* https://kutar37.tistory.com/entry/%EC%82%AC%EC%9D%B4%EB%93%9C%EB%B0%94-%EC%99%B8%EB%B6%80%ED%81%B4%EB%A6%AD%EC%8B%9C-%EC%88%A8%EA%B8%B0%EA%B8%B0 */

      li {
        display: none;
      }
      .Burger {
        display: flex;
        background-color: black;
      }

      .sideOpen{
        display: block;
      }
  }
`



const Header = () => {
    // 햄버거메뉴 상태관리
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);
    const sideClose = () => setClick(false);

    return (
        <>
          <HeaderNav>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto:wght@900&family=Rock+Salt&display=swap" rel="stylesheet" />
            <nav>
              <ul>
                <NavLink to="/" ><img onClick={sideClose} alt="test" className="LogoImg" src={logo}/></NavLink>
                <li><NavLink to="/roadmap" ><p>ROADMAP</p></NavLink></li>
                <li><NavLink to="/concept" ><p>CONCEPT</p></NavLink></li>
                {/* <li><NavLink to="/callendar" ><p>CALLENDAR</p></NavLink></li> */}
                {/* <li><NavLink to="/bounty" ><p>BOUNTY</p></NavLink></li> */}
                <li><NavLink to="/vault" ><p>VAULT</p></NavLink></li>
                <li><NavLink to="/crew" ><p>CREW</p></NavLink></li>
                {/* <li><NavLink to="/tavern" ><p>TAVERN</p></NavLink></li> */}
                {/* <li><NavLink to="/tavern/page/1" ><p>TAVERN</p></NavLink></li> */}
                {/* <li><NavLink to="/item" ><p>ITEM</p></NavLink></li> */}
                {/* 햄버거메뉴 */}
                <button onClick={handleClick} className="Burger">
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
                </button>
                {/* 사이드모달 */}
                <div className={click ? "sideOpen" : "sideClose"}>
                  <button className="exitBtn" onClick={handleClick}>
                    <div className="exitBtn1"></div>
                    <div className="exitBtn2"></div>
                  </button>
                  <ul className="sideUl">
                    <div onClick={handleClick} className="sideList"><NavLink to="/roadmap" ><p>ROADMAP</p></NavLink></div>
                    <div onClick={handleClick} className="sideList"><NavLink to="/vault" ><p>VAULT</p></NavLink></div>
                    <div onClick={handleClick} className="sideList"><NavLink to="/crew" ><p>CREW</p></NavLink></div>
                  </ul>
                </div>
              </ul>
            </nav>
          </HeaderNav>
        </>
    );
};

export default Header;