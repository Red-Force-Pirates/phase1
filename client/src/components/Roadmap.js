import React from 'react';
import roadmap from '../assets/img/roadmap.png'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RoadmapStyle = styled.div`
  .container_roadmap{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    /* background-color: black; */
  }

  .mainImg_roadmap {
    width: 80%;
  }

  .phase_carousel {
    position: absolute;
    width: 80%;
    height: 100%;
    /* background-color: gray; */
    top: 0;
    color: white;
  }
`

function Roadmap() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <RoadmapStyle >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
          <div className="container_roadmap">
            <div className="phase_carousel">
              <div>
                test
                <h2> Single Item</h2>
                <Slider {...settings}>
                  <div>
                    <h3>1</h3>
                  </div>
                  <div>
                    <h3>2</h3>
                  </div>
                  <div>
                    <h3>3</h3>
                  </div>
                  <div>
                    <h3>4</h3>
                  </div>
                  <div>
                    <h3>5</h3>
                  </div>
                  <div>
                    <h3>6</h3>
                  </div>
                </Slider>
              </div>
            </div>
            <img className="mainImg_roadmap" alt="main" src={roadmap}></img>
          </div>
      </RoadmapStyle>
    </>
  );
}
  
  
  
  
  export default Roadmap;