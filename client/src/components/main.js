import React from 'react';
import main from '../assets/img/main.png'
import styled from 'styled-components';


const MainStory = styled.div`

  .project_intro {
    text-align: center;
    font-family: 'Gowun Batang', serif;
    font-size: 2vw;
    padding: 20px 0px;
    color: white;
  }
  
  .phase_v {
    position: absolute;
    top: 10;
    font-size: 6vw;
    color: white;
    text-align: center;
    font-family: 'Rock Salt', cursive;
  }

  .container_main{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    background-color: black;
  }

  .mainImg_main {
    width: 80%;
  }
`;



function Home() {
  return (
    <>
      <MainStory >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
        <div className="project_intro">Klaytn 탈중앙화 커뮤니티 Pirates DAO.</div>
        <div className="container_main">
          <div className="phase_v">Phase 0.</div>
          <img className="mainImg_main" alt="main" src={main}></img>
        </div>
      </MainStory>
    </>
  );
}




export default Home;