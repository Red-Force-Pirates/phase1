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
  }

  .mainImg_roadmap {
    width: 80%;
  }

  /* 캐러셀 */
  .phase_carousel {
    position: absolute;
    width: 80%;
    height: 100%;
    top: 0;
    color: white;
  }

  /* 배경 불투명처리 */
  .phase_carousel::before {
    content:"";
    background-color: black;
    opacity: 0.3;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  .roadmap_slider {
    /* background-color: darkgreen; */
    height: 100%;
  }

  /* 컨텐츠 영역 */
  .phase_head {
    font-family: 'Rock Salt', cursive;
    text-align: center;
  }

  .phase_headline {
    /* font-family: 'Gothic A1', sans-serif; */
    /* font-family: 'Roboto', sans-serif; */
    /* font-family: 'Rock Salt', cursive; */
    font-family: 'Walter Turncoat', cursive;
    text-align: center;
  }

  .test {
    width: 100%;
    height: 100vh;
    background-color: green;
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
          <div className="test"></div>
          {/* <div className="container_roadmap">
            <div className="phase_carousel">
                <Slider {...settings} className="roadmap_slider">
                  <div>
                    <h1 className="phase_head">Phase 0.<br /> Pirates DAO Launching</h1>
                    <div className="phase_headline">페이즈 0는 해적단의 출항, 즉 NFT 프로젝트의 런칭을 의미합니다. <br />Phase 0 means the pirates set sail, that is, the launch of the NFT project.</div>
                    <div>test1</div>
                    <div>test1</div>
                  </div>
                  <div>
                    <h3>2</h3>
                    <div>test2</div>
                    <div>test2</div>
                    <div>test2</div>
                  </div>
                  <div>
                    <h3>3</h3>
                    <div>test3</div>
                    <div>test3</div>
                    <div>test3</div>
                  </div>
                  <div>
                    <h3>4</h3>
                    <div>test4</div>
                    <div>test4</div>
                    <div>test4</div>
                  </div>
                  <div>
                    <h3>5</h3>
                    <div>test5</div>
                    <div>test5</div>
                    <div>test5</div>
                  </div>
                  <div>
                    <h3>6</h3>
                    <div>test6</div>
                    <div>test6</div>
                    <div>test6</div>
                  </div>
                </Slider>
            </div>
            <img className="mainImg_roadmap" alt="main" src={roadmap}></img>
          </div> */}
      </RoadmapStyle>
    </>
  );
}
  
  
  
  
  export default Roadmap;