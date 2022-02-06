import React from 'react';
import roadmap from '../assets/img/roadmap.png'
import styled from 'styled-components';

const RoadmapStyle = styled.div`
   .container_roadmap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    background-color: black;
  }

  .mainImg_roadmap {
    width: 80%;
  }

  .phase_carousel {
    position: absolute;
    width: 80%;
    height: 100%;
    background-color: gray;
    top: 0;
    color: white;
  }
`

function Roadmap() {
    return (
      <>
        <RoadmapStyle >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
            <div className="container_roadmap">
              <div className="phase_carousel">Phase 0.</div>
              <img className="mainImg_roadmap" alt="main" src={roadmap}></img>
            </div>
        </RoadmapStyle>
      </>
    );
  }
  
  
  
  
  export default Roadmap;