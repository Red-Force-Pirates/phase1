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
                .c1_text {
                    font-size: 1.6vw;
                }
            }

            .container1_intro_img {
                .cat4_img {
                    /* background-color: darkblue; */
                    padding: 18px;
                    width: 100%;
                }
            }
        }

    /* container 2 */
    .concept_container2 {
        border-top: solid 1px white;
        border-bottom: solid 1px white;
        color: white;
        display: flex;
        flex-direction: row-reverse;
        .concept_container2_intro {
            /* background-color: turquoise; */
            width: 60%;
            border-left: solid 1px white;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2vw 4vw;
        }

        .c2_headline {
            color: yellow;
            font-family: 'Anton', sans-serif;
            font-size: 72px;
            margin-top: -12px;
            padding-bottom: 20px;
        }

        .c2_body {
            line-height: 24px;
            font-size: 18px;
        }

        .concept_container2_img {
            /* background-color: tomato; */
            width: 40%;
            padding: 4vw 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            .cat1_img {
                width: 60%;
            }
        }
    }

    /* container 3 */
    .concept_container3 {
        border-bottom: solid 1px white;
        padding: 4vw 8vh;
        .concept_container3_title {
            background-color: white;
            display: flex;
            justify-content: center;
            font-family: 'Anton', sans-serif;
            font-size: 72px;
        }
        .concept_container3_contents {
            color: white;
            padding-top: 2vw;
            .c3_text {
                font-size: 48px;
                display: flex;
                justify-content: space-around;
            }
            .c3_headline {
                font-family: 'Anton', sans-serif;
                font-size: 48px;
            }
            .c3_body {
                padding-top: 1vw;
                font-size: 20px;
            }
        }
        
    }

    .concept_container4 {
        border-bottom: solid 1px white;
        padding: 4vw 8vh;
        .concept_container4_contents {
            color: white;
            padding-top: 2vw;
            .c4_text {
                font-size: 48px;
                display: flex;
                justify-content: space-around;
            }
            .c4_headline {
                font-family: 'Anton', sans-serif;
                font-size: 48px;
                padding-right: 0px;
                padding-bottom: 20px;
            }
            .c4_feature {
                .c4_body {
                    padding: 2vw 0;
                    font-size: 20px;
                    line-height: 28px;
                }
                .c4_body_head {
                    font-size: 32px;
                    color: #36F217;
                    font-family: 'Rock Salt', cursive;
                    padding-bottom: 40px;
                }
            }
        }
        
    }
        

    /* 반응형 */
    @media (max-width: 768px) {
        /* 컨테이너 1 */
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
        .c1_body {
            font-size: 3vw;
        }

        /* 컨테이너 2 */
        .concept_container2 {
            display: block;
            .concept_container2_intro {
                display: flex;
                width: auto;
                border: none;
                .c2_headline {
                    font-size: 48px;
                    padding-top: 20px;
                }
                /* .c2_body {
                    font-size: 18px;
                } */
            }
            .concept_container2_img {
                width: auto;
            }
        }

        /* 컨테이너 3 */
        .concept_container3 {
            .c3_title {
                font-size: 24px;
            }
            .concept_container3_contents {
                .c3_text {
                    display: block;
                    .c3_headline {
                        font-size: 40px;
                    }
                    .c3_body {
                        font-size: 20px;
                    }
                }
            }
        }

        /* 컨테이너 4 */
        .concept_container4 {
            .c4_title {
                font-size: 24px;
            }
            .concept_container4_contents {
                .c4_text {
                    display: block;
                    .c4_headline {
                        font-size: 40px;
                    }
                    .c4_body {
                        font-size: 20px;
                    }
                }
            }
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
                            <div className="c1_text">
                                <p className="c1_body">
                                    PiratesDAO는 클레이튼 체인 위에 살고 있는<br />
                                    10000개의 대체 불가능한 토큰입니다.<br />
                                    각각의 고양이들은 200여개의 독특한 파트들로 구성되어<br />
                                    세상에 오직 하나만 존재하는 특별한 수집품입니다.<br />
                                    <br />
                                    또한 www.piratesdao.org에서 프로필로 사용할 수 있으며<br />
                                    앞으로 추가될 소셜네트워크, 캘린더, 시즌 랭킹 시스템,<br />
                                    디파이, 게임 등의 기능들을 사용할 수 있습니다.<br />
                                </p>
                            </div>
                        </div>
                        <div className="container1_intro_img">
                            <img className="cat4_img" alt="main" src={catsample4}></img>
                        </div>
                    </div>
                </div>
                <div className="concept_container2">
                    <div className="concept_container2_intro">
                        <div className="c2_text">
                            <div className="c2_headline">FAIR DISTRIBUTION</div>
                            <div className="c2_body">
                                모든 NFT의 가격은 동일한 35Klay이며<br /> 
                                런칭 단계에서 동등한 가치를 갖고 있습니다.<br />
                                Trait의 확률은 재미의 요소일뿐 <br />
                                외형적 차이 이외에 <br />
                                어떤 특별한 가치나 기능을<br /> 
                                부가적으로 갖지 않습니다.<br />
                                그러나 로드맵의 진행에 따라<br />
                                놀이적 요소나 추가 될 수 있으며 발행 가격이 <br />
                                상승할 수 있습니다.<br />
                            </div>
                        </div>
                    </div>
                    <div className="concept_container2_img">
                        <img className="cat1_img" alt="main" src={catsample1}></img>
                    </div>
                </div>
                <div className="concept_container3">
                    <div className="concept_container3_title">
                        <div className="c3_title">GET A PIRATE CAT ON OPENSEA</div>
                    </div>
                    <div className="concept_container3_contents">
                        <div className="c3_text">
                            <div className="c3_headline">
                                THE SPECS
                            </div>
                            <div className="c3_body">
                            클레이튼 체인의 KIP-37에 증명되었으며 이미지는 IPFS에 호스팅 되었습니다.<br /><br />
                            컨트랙트 주소: (공개예정)<br /><br />
                            고양이 해적의 민팅 가격은 개당 35Klay 입니다.<br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="concept_container4">
                    <div className="concept_container4_contents">
                        <div className="c4_text">
                            <div className="c4_headline">
                                FEATURES
                            </div>
                            <div className="c4_feature">
                                <div className="c4_body">
                                    <div className="c4_body_head">A Note In A Bottle</div>
                                        병속의 든 쪽지는 PIRATESDAO에서 화폐처럼 사용되는 매우 특별한 NFT 자산입니다.<br />
                                        해적들은 정보를 공유하며 커뮤니티와 해적 브랜드에 가치를 증가시킵니다.<br />
                                        <br />
                                        해적들의 대화가 가치가 있을수록 신규 유저들은 정보를 얻기 위해 유입될 것이며<br />
                                        신규 유저들은 병속에 든 쪽지를 구입하여야만 게시판과 달력 기능을 사용할 수 있습니다.<br />
                                        <br />
                                        이렇게 판매된 쪽지의 수익은 정보를 공유하여 커뮤니티에 기여한<br />
                                        <b>해적들에게 보상으로 돌아가며 커뮤니티의 생태계는 선순환</b>을 일으킵니다.<br />
                                </div>
                                <div className="c4_body">
                                    <div className="c4_body_head">Sea Map</div>
                                        Sea Map(해도)은 nft 프로젝트 일정을 등록할 수 있는 캘린더 기능입니다.<br />
                                        해적들에게 다음 보물섬이 어디에 있는지 알려주는 보물 지도와 같습니다. <br />
                                        <br />
                                        해적들은 새로운 프로젝트들의 일정 정보를 달력을 통해 공유하며<br />
                                        커뮤니티의 가치를 만들어냅니다. 그리고 그 댓가로 DAO로 부터 물질적 보상과 후원을 받습니다.<br />
                                </div>
                                <div className="c4_body">
                                    <div className="c4_body_head">Vault</div>
                                    Vault(보물금고)에선 PiratesDAO가 벌어들이는 수익을 확인할 수 있습니다.<br />
                                    이곳에 저장된 유무형의 가치들은 NFT 홀더들에게 분배 됩니다.<br />
                                </div>
                                <div className="c4_body">
                                    <div className="c4_body_head">Tavern</div>
                                        Tavern(선술집)에는 두가지 메인 기능이 존재합니다.<br />
                                        첫째, NFT 프로젝트들에 대한 의견과 뉴스를 공유합니다.<br />
                                        대상의 가치에 대해 토론하고 관점을 제시하여 집단 지성을 이룹니다.<br />
                                        <br />
                                        둘째, 해적들은 자신의 위대함을 증명하기 위해 수익을 공개합니다.<br />
                                        이를 통해 해적은 자신의 등급과 명성을 올려 상위 랭크에 오르게 됩니다.<br />
                                        <br />
                                        Tavern을 통해 자신의 분석을 공유함으로써 다른 해적들에게 이익을 주고,<br />
                                        DAO로 부터 더 많은 보상을 받게 됩니다.
                                </div>
                                <div className="c4_body">
                                    <div className="c4_body_head">Bounty</div>
                                        Bounty(현상금)은 랭킹을 의미합니다.<br />
                                        수익을 올린 해적들은 자신의 명성을 수익 공개를 통해 올릴 수 있습니다.<br />
                                        이와 같은 행위는 다른 해적들에게 귀감이 되며<br />
                                        그들의 공유하는 정보들을 신뢰하는데에 도움이 됩니다.<br />
                                        <br />
                                        경쟁 시스템은 이러한 행위를 촉진하고<br />
                                        보상을 지급할때 기준으로 삼습니다.<br />
                                        <br />
                                        블록체인은 모든 것을 기록합니다. <br />
                                        당신의 역사를 서사로 만드십시오.<br />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ConceptStyle>

        </>
    )
}

export default Concept;