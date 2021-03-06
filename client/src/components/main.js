import React from 'react';
import main from '../assets/img/main.png'
import styled from 'styled-components';


const MainStory = styled.div`

  .container_main{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    background-color: black;
    .phase_v {
      position: absolute;
      top: 36px;
      font-size: 8vw;
      color: white;
      text-align: center;
      font-family: 'Anton', sans-serif;
      text-decoration: none;
    }
    .mainImg_main {
      width: 100%;
    }
  }

  /* 반응형 */
  @media (max-width: 768px) {
      .project_intro {
        font-size: 6vw;
      }
    }
`;



function Home() {

  window.klaytn.enable();

  return (
    <>
      <MainStory >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Anton&family=Dokdo&family=East+Sea+Dokdo&family=Gothic+A1&family=Gowun+Batang&family=Nanum+Brush+Script&family=Roboto:wght@900&family=Rock+Salt&family=Walter+Turncoat&display=swap" rel="stylesheet" />
        <div className="container_main">
          <div className="phase_v">WELCOME TO PIRATESDAO</div>
          <img className="mainImg_main" alt="main" src={main}></img>
        </div>
      </MainStory>
    </>
  );
}




export default Home;