import React from 'react';
import roadmap from '../assets/img/roadmap.png'
import styled from 'styled-components';

const RoadmapStyle = styled.div`
   .container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 600px;
    position: relative;
    background-color: black;
  }

  .mainContents {
    width: 80%;
    height: 100%;
    background-image: url(${roadmap});
  }

`

function Roadmap() {
    return (
      <>
        <RoadmapStyle >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
            <div className="container">
              <div className="mainContents">
              </div>
            </div>
        </RoadmapStyle>
      </>
    );
  }
  
  
  
  
  export default Roadmap;