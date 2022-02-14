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

  /* 컨텐츠 영역 */
  .phase_carousel {
    width: 80%;
    height: 100vh;
    color: white;
    /* background-color: darkgreen; */
  }

  /* 캐러셀 */
  .roadmap_slider {
    background-color: darkblue;
    height: 100%;
    background: url(${roadmap}) no-repeat center/cover;
  }
  /* 배경 불투명처리 */
  .roadmap_slider::before {
    content:"";
    background-color: black;
    opacity: 0.4;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }

  /* 페이즈 */
  .phase_0 {
    /* background-color: cadetblue; */
    height: 100vh;
  }

  .phase_head {
    font-family: 'Rock Salt', cursive;
    text-align: center;
    /* font-size: 4vw; */
  }

  .phase_headline {
    /* font-family: 'Gothic A1', sans-serif; */
    /* font-family: 'Roboto', sans-serif; */
    /* font-family: 'Rock Salt', cursive; */
    /* font-family: 'Gowun Batang', serif; */
    font-family: 'Walter Turncoat', cursive;
    text-align: center;
    font-size: 1.4vw;
  }

  .phase_0_concept {
    display: flex;
    padding: 6vw 8vw;
    font-size: 1.4vw;
    line-height: 1.4;
    justify-content: space-between;
  }

  .concept_head {
    font-family: 'Walter Turncoat', cursive;
    font-size: 2vw;
  }

    /* 반응형 */
    @media (max-width: 768px) {
      .phase_0_concept {
          display: block;
      }
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
      {/* font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Gowun+Batang&family=Roboto:wght@900&family=Rock+Salt&family=Walter+Turncoat&display=swap" rel="stylesheet" />
      {/* body */}
      <div className="container_roadmap">
        <div className="phase_carousel">
          <Slider {...settings} className="roadmap_slider">
            <div className="phase_0">
              <h1 className="phase_head">Phase 0.<br /> Pirates DAO Launching</h1>
              <div className="phase_headline">
                페이즈 0는 해적단의 출항, 즉 Pirates Dao의 런칭을 의미합니다. <br />Phase 0 means the pirates set sail, that is, the launch of the Pirates Dao.
                <br /><br />
                그리고 Pirates DAO에 대한 주요 개념과 세계관을 소개합니다.<br />And introduces the main concepts and worldviews of Pirates DAO.
              </div>
              <div className="phase_0_concept">
                <div className="concept_head">'Pirates DAO'</div>
                <div>
                  Pirates DAO는 Klaytn 기반 <b>'탈중앙화 커뮤니티'</b>입니다.<br />
                  Pirates DAO의 nft를 가진 누구나 자유롭게 컨텐츠를 생산할 수 있는 공간입니다.<br />
                  그리고 컨텐츠로 발생한 수익은 생산자가 가져가는 구조입니다.<br />
                </div>
              </div>
              <div className="phase_0_idea">test</div>
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
      </div>
      </RoadmapStyle>
    </>
  );
}
  
  
  
  
  export default Roadmap;