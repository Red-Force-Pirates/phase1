import React from 'react';
import styled from 'styled-components';
import conceptBg from '../assets/img/conceptBg.png'
import catsample4 from '../assets/img/catsample4.png'

const ConceptStyle = styled.div`

    /* container 1 */
    .concept_container1{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background-color: gray;
        background: url(${conceptBg}) no-repeat center/cover;
    }

    .container1_intro {
        padding: 6vw 0;
        width: 80%;
        height: 100%;
        display: flex;
        /* background-color: darkgoldenrod; */
        justify-content: space-between;
        .container1_intro_text {
            color: white;
            /* background-color: darkgray; */
            /* margin: -20px 0px; */
            .c1_headline {
                font-size: 4.8vw;
                font-family: 'Anton', sans-serif;
            }
            .c1_body {
                /* font-size: 1.2vw; */
            }
        }

        .intro_image {
            /* background-color: darkgrey; */
            padding: 18px 0px;
        }
    }

`

function Concept () {
    return (
        <>
            <ConceptStyle>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Anton&family=Dokdo&family=East+Sea+Dokdo&family=Gothic+A1&family=Gowun+Batang&family=Nanum+Brush+Script&family=Roboto:wght@900&family=Rock+Salt&family=Walter+Turncoat&display=swap" rel="stylesheet" />
                <div className="concept_container1">
                    <div className="container1_intro">
                        <div className="container1_intro_text">
                            <div className="c1_headline">WELCOME TO THE<br/> PIRATESDAO</div>
                            <p className="c1_body">
                                PiratesDAO는 클레이튼 체인 위에 살고 있는<br /> 
                                10000개의 대체 불가능한 토큰입니다.<br />
                                각각의 고양이들은 200여개의 독특한 파트들로 구성되어<br />
                                세상에 오직 하나만 존재하는 특별한 수집품입니다.<br />
                                <br />
                                또한 www.piratesdao.org에서 프로필로 사용할 수 있으며<br />
                                앞으로 추가될 선술집(커뮤니티), 해도(캘린더), 현상금수배서(시즌제 랭킹 시스템)<br />
                                소셜네트워크, 디파이, 게임들의 기능들을 사용할 수 있습니다.
                            </p>
                        </div>
                        <div>
                            <img className="intro_image" alt="main" src={catsample4}></img>
                        </div>
                    </div>
                </div>
            </ConceptStyle>

        </>
    )
}

export default Concept;