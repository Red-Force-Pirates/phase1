import React from 'react';
import styled from "styled-components";
import twit from "../src/assets/img/twit.png"
import disc from "../src/assets/img/disc.png"
import inst from "../src/assets/img/inst.png"
import tele from "../src/assets/img/tele.png"

const Foot = styled.div`
    
    padding-left: 10%;
    padding-right: 10%;
    
    background-color: black;

    /* fContainer1 */
    .fContainer {
        background-color: black;
        vertical-align: middle;
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 30px;
        color: white;
        font-size: 8px;
        line-height: 16px;
        font-family: 'Walter Turncoat', cursive;
        align-items: flex-start;
        justify-content: space-between;
    } 

    .fContainer a {
        text-decoration: none;
        color: white;
    }

    .fContainer a:link{
        text-decoration: none;
        color: white;
    }
    
    .fContainer a:visited{
        text-decoration: none;
        color: white;
    }

    .fContainer_left{
        display: flex;
    }
    
    /* LEFT */
    .fContainer_left_content {
        margin-right: 40px;
    }

    /* RIGHT */
    .imgSection {
        display: flex;
        justify-content: flex-end;
    }

    .snsText{
        text-align: right;
    }

    .img_box {
        padding-top: 20%;
        /* margin-right: 20%; */
        padding-left: 20%;
    }

    .sns_logo{
        width: 36px;
        height: 36px;
    }


    /* 폰트 */
    font-family: 'Gothic A1', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-family: 'Rock Salt', cursive;
    font-family: 'Walter Turncoat', cursive;

    /* 반응형 */
    @media (max-width: 768px) {
        
    }
`

const Footer = () => (

    <Foot>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Gothic+A1&family=Roboto:wght@900&family=Rock+Salt&family=Walter+Turncoat&display=swap" rel="stylesheet" />
        <div className="fContainer">
            <div className="fContainer_left">
                <div className="fContainer_left_content">
                    PIRATES DAO.<br />
                    THE KLAYTN NETWORK'S FIRST
                    COMMUNITY FOR COLLECTIBLES
                    AND NON-FUNGIBLE TOKEN TRADERS.<br />
                    SHARE YOUR JOY WITH GREAT PIRATES<br />
                </div>
                {/* <div className="fContainer_left_content">
                    <a href='/'>SUGGESTIONS</a><br />
                    <a href='/'>DISCORD COMMUNITY</a><br />
                    <a href='/'>BLOG</a><br />
                    <a href='/'>DOCS</a><br />
                    <a href='/'>NEWSLETTER</a>
                </div> */}
                {/* <div className="fContainer_left_content">
                    <a href='/'>RESOURCES</a><br />
                    <a href='/'>HELP CENTER</a><br />
                    <a href='/'>PLATFORM STATUS</a><br />
                    <a href='/'>PARTNERS</a><br />
                    <a href='/'>GAS-FREE MARKETPLACE</a>
                </div> */}
                {/* <div className="fContainer_left_content">
                    <a href='/'>COMPANY</a><br />
                    <a href='/'>ABOUT</a><br />
                    <a href='/'>CAREERS</a><br />
                </div> */}
            </div>
            <div className="fContainer_right">
                <div className="fContainer_right_content">
                    <div className="snsText">Join the COMMUNITY</div>
                    <div className="imgSection">
                        <div className="img_box">
                            <a href="https://google.com" target="blank"><img alt="twit" className="sns_logo" src={twit}></img></a>
                        </div>
                        <div className="img_box">
                            <a href="https://google.com" target="blank"><img alt="disc" className="sns_logo" src={disc}></img></a>
                        </div>
                        <div className="img_box">
                            <a href="https://google.com" target="blank"><img alt="inst" className="sns_logo" src={inst}></img></a>
                        </div>
                        <div className="img_box">
                            <a href="https://google.com" target="blank"><img alt="tele" className="sns_logo" src={tele}></img></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="fContainer">
            <div className="footer-logo">2018 - 2021 PIRATES DAO</div>
            <div className="footer-logo">INC PRIVACY POLICY TERMS OF SERVICE</div>
        </div>
    </Foot>

)
export default Footer;