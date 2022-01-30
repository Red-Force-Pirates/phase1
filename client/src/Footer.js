import React from 'react';
import styled from "styled-components";
import fav from '../src/assets/img/fav.ico'

const Foot = styled.div`
    
    padding-left: 10%;
    padding-right: 10%;
    
    background-color: black;

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
    
    .fContainer_left_content {
        margin-right: 20px;
    }

    .footer-logo{
        /* margin-right: auto; */
    }


    /* 폰트 */
    font-family: 'Gothic A1', sans-serif;
    font-family: 'Roboto', sans-serif;
    font-family: 'Rock Salt', cursive;
    font-family: 'Walter Turncoat', cursive;
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
                    THE KLAYTN NETWORK'S FIRST<br />
                    COMMUNITY FOR COLLECTIBLES<br />
                    AND NON-FUNGIBLE TOKEN TRADERS.<br />
                    SHARE YOUR JOY WITH GREAT PIRATES<br />
                </div>
                <div className="fContainer_left_content">
                    <a href='/'>SUGGESTIONS</a><br />
                    <a href='/'>DISCORD COMMUNITY</a><br />
                    <a href='/'>BLOG</a><br />
                    <a href='/'>DOCS</a><br />
                    <a href='/'>NEWSLETTER</a>
                </div>
                <div className="fContainer_left_content">
                    <a href='/'>RESOURCES</a><br />
                    <a href='/'>HELP CENTER</a><br />
                    <a href='/'>PLATFORM STATUS</a><br />
                    <a href='/'>PARTNERS</a><br />
                    <a href='/'>GAS-FREE MARKETPLACE</a>
                </div>
                <div className="fContainer_left_content">
                    <a href='/'>COMPANY</a><br />
                    <a href='/'>ABOUT</a><br />
                    <a href='/'>CAREERS</a><br />
                </div>
            </div>
            <div className="fContainer_right">
                <div className="fContainer_right_content">
                    Join the COMMUNITY
                </div>
            </div>
        </div>
        <div className="fContainer">
            <div className="footer-logo"><a href='/'>2018 - 2021 PIRATES DAO</a></div>
        </div>
    </Foot>

)
export default Footer;