import React from 'react';
import main from '../assets/img/main.png'
import styled from 'styled-components';


const MainStory = styled.div`
  
  .phase_v {
    position: absolute;
    top: 10;
    font-size: 80px;
    color: white;
    text-align: center;
    /* font-family: 'Roboto', sans-serif; */
    font-family: 'Rock Salt', cursive;
  }

  .container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    background-color: black;
  }

  .mainImg {
    width: 80%;
  }
  
  /* 반응형 */
  @media (max-width: 768px) {
    .phase_v {
      font-size: 40px;
    }
  }
`;



function Home() {
  return (
    <>
      <MainStory >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
            <div className="container">
              <div className="phase_v">Phase 0.</div>
              <img className="mainImg" alt="main" src={main}></img>
            </div>
      </MainStory>
    </>
  );
}




export default Home;