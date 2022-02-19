import React from 'react';
import styled from 'styled-components';
import conceptBg from '../assets/img/conceptBg.png'
import catsample4 from '../assets/img/catsample4.png'
import catsample1 from '../assets/img/catsample1.png'

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
                .c1_headline {
                    font-size: 72px;
                    font-family: 'Anton', sans-serif;
                }
                .c1_body {
                    font-size: 20px;
                }
            }

            .container1_intro_img {
                .cat4_img {
                    /* background-color: darkblue; */
                    padding: 18px 0px;
                }
            }
        }

    .concept_container2 {
        border: solid 1px white;
        color: white;
        display: flex;
        flex-direction: row-reverse;
        .concept_container2_intro {
            background-color: turquoise;
            width: 60%;
        }

        .concept_container2_img {
            background-color: tomato;
            width: 40%;
        }
    }


    /* 반응형 */
    @media (max-width: 768px) {
        span {
            display: block;
        }
        .container1_intro {
            display: block;
        }
        .container1_intro_img {
            display: flex;
            justify-content: center;
            .cat4_img {
                margin: 0px 10px;
                width: 100%;
                height: 100%;
            }
        }
        /* .c1_body {
            font-size: 8px;
        } */

        .concept_container2 {
            display: block;
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
                            <div className="c1_body">
                                PiratesDAO는 클레이튼 체인 위에 살고 있는<br />
                                10000개의 대체 불가능한 토큰입니다.<br />
                                각각의 고양이들은 200여개의 독특한 파트들로 구성되어<br />
                                세상에 오직 하나만 존재하는 특별한 수집품입니다.<br />
                                <br />
                                또한 www.piratesdao.org에서 프로필로 사용할 수 있으며<br />
                                앞으로 추가될 소셜네트워크, 캘린더, 시즌 랭킹 시스템<br />
                                디파이, 게임 등의 기능들을 사용할 수 있습니다.
                            </div>
                        </div>
                        <div className="container1_intro_img">
                            <img className="cat4_img" alt="main" src={catsample4}></img>
                        </div>
                    </div>
                </div>
                <div className="concept_container2">
                    <div className="concept_container2_intro">
                        test
                    </div>
                    <div className="concept_container2_img">
                        <img className="cat1_img" alt="main" src={catsample1}></img>
                    </div>
                </div>
            </ConceptStyle>

        </>
    )
}

export default Concept;