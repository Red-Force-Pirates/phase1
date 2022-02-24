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

  /* 컨텐츠 영역 */
  .phase_carousel {
    width: 100%;
    height: 100%;
    color: white;
    background-color: darkgreen;
    background: url(${roadmap}) no-repeat center/cover;
    margin-left: -10px;
  }

  /* 캐러셀 */
  .roadmap_slider {
    padding-top: 20px;
    /* background-color: darkgray; */
    height: 100%;
  }
  /* 배경 불투명처리 */
  .roadmap_slider::before {
    content:"";
    background-color: black;
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
  .slideNext {
    background-color: brown;
    display: flex;
    justify-content: space-around;
  }

  /* 페이즈 */
  .phase_0 {
    /* background-color: darkblue; */
    height: 100%;
  }

  .phase_head {
    font-family: 'Rock Salt', cursive;
    text-align: center;
    /* font-size: 4vw; */
  }

  .coming_soon {
    font-family: 'Rock Salt', cursive;
    text-align: center;
    font-size: 4vw;
  }

  .phase_headline {
    /* font-family: 'Gothic A1', sans-serif; */
    /* font-family: 'Roboto', sans-serif; */
    /* font-family: 'Rock Salt', cursive; */
    /* font-family: 'Gowun Batang', serif; */
    padding: 0px 8px;
    font-family: 'Walter Turncoat', cursive;
    text-align: center;
    font-size: 2vw;
  }

  .concept_head {
    font-family: 'Walter Turncoat', cursive;
    font-size: 2vw;
    padding-right: 4vw;
    text-align: center;
  }

  .concept_body {
    text-align: center;
  }

  .phase_concept {
    display: flex;
    padding: 6vw 8vw 1vw 8vw;
    font-size: 2vw;
    line-height: 1.4;
    justify-content: center;
  }

  .phase_item {
    display: flex;
    justify-content: space-around;
    padding-bottom: 2vw;
  }

  .item_list {
    /* background-color: darkgoldenrod; */
    font-family: 'Walter Turncoat', cursive;
    font-size: 2.4vw;
    text-align: center;
    padding-top: 40px;
  }

  .idea_item {
    text-align: center;
    font-size: 4vw;
    font-family: 'East Sea Dokdo', cursive;
    padding: 1vw 0;
  }

  .slide_next {
    font-family: 'Walter Turncoat', cursive;
    font-size: 4vw;
    padding-top: 40px;
    padding-bottom: 20px;
  }

  /* 반응형 */
  @media (max-width: 768px) {
    .phase_head {
      font-size: 4vw;
    }
    .phase_headline {
      font-size: 3vw;
    }
    .phase_concept {
      font-size: 3.6vw;
      display: block;
    }
    .concept_head {
      font-size: 2.8vw;
      padding-left: 0px;
    }
    .idea_item{
      font-size: 8vw;
    }
    span {
      display: block;
    }
  }

`

function HideArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

function Roadmap() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <HideArrow />,
    prevArrow: <HideArrow />
  };
  return (
    <>
      <RoadmapStyle >
      {/* font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Dokdo&family=East+Sea+Dokdo&family=Gothic+A1&family=Gowun+Batang&family=Nanum+Brush+Script&family=Roboto:wght@900&family=Rock+Salt&family=Walter+Turncoat&display=swap" rel="stylesheet" />
      {/* body */}
      <div className="container_roadmap">
        <div className="phase_carousel">
          <Slider {...settings} className="roadmap_slider">
            <div className="phase_0">
              <h1 className="phase_head">Phase 0.<br /> Pirates DAO Launching</h1>
              <div className="phase_headline">
                페이즈 0는 Klaytn 기반 탈중앙화 커뮤니티,<br /> 'Pirates Dao'의 런칭입니다. 
              </div>
              <div className="phase_concept">
                <div className="concept_head">'Pirates DAO'</div>
                <div className="concept_body">
                  <span>Pirates DAO는 Klaytn 기반 <b>'탈중앙화 커뮤니티'</b>입니다.<br /></span>
                  <span>프로필 nft를 가진 누구나 컨텐츠를 생산할 수 있습니다.<br /></span>
                  <span>컨텐츠로 발생한 수익은 <b>생산자가 가져가는</b> 구조입니다.</span>
                </div>
              </div>
              <div className="phase_item">
                <ul className="item_list">
                  This Phase main concept.
                  <li className="idea_item">'병에 든 쪽지'</li>
                  <li className="idea_item">'수배서'</li>
                  <li className="slide_next">Slide next Phase ➸</li>
                </ul>
              </div>
            </div>
            <div className="phase_1">
              <h1 className="phase_head">Phase 1.<br /> Tavern & Sea Map</h1>
              <div className="phase_headline">
                페이즈 1에선 nft로 할 수 있는 각종 기능들을 출시합니다. <br />그중 선술집(Tavern)' 과 '해도(Sea Map)'가 핵심 컨텐츠입니다.
              </div>
              <div className="phase_item">
                <ul className="item_list">
                  This Phase main concept.
                  <li className="idea_item">'선술집(TAVERN)'</li>
                  <li className="idea_item">'해도(Sea Map)'</li>
                  <li className="slide_next">Slide to next Phase ➸</li>
                </ul>
              </div>
            </div>
            <div className="phase_2">
              <h1 className="phase_head">Phase 2.</h1>
              <h2 className="coming_soon">COMING SOON...</h2>
            </div>
          </Slider>          
        </div>
      </div>
      </RoadmapStyle>
    </>
  );
}
  
  
  
  
  export default Roadmap;