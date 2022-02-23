import React from 'react';
import vault from '../../assets/img/Vault/vault_background.png';
import styled from 'styled-components';
import TemporaryDrawer from './Drawer';

const VaultStyle = styled.div`
   .container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 700px;
    position: relative;
    background-color: black;

  }

  .mainContent {
    width: 100%;
    height: 100%;
    background-image: url(${vault});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
    display: flex;
    justify-content: start;
  }

  .contentBox {
    /* height: auto; */
    margin: auto;
    /* margin-left: 10%; */
    /* margin-top: 5%; */
    /* background-color: brown; */
    display: flex;
    flex-direction: column;
  }

  .contentBox:hover {
    .mainText{
    color: gold;
    }
    .mainVault {
      color: gold;
    }
  }

  .mainText {
    /* margin-left: 10%; */
    color: white;
    font-size: 120px;
    font-weight: bold;
    cursor: pointer;
    font-family: 'Anton',sans-serif;
    /* background-color: red; */
  }

  .mainVault {
      /* margin-left: 10%; */
      color: white;
      font-size: 180px;
      font-weight: bold;
      cursor: pointer;
      font-family: 'Anton',sans-serif;
      /* background-color: blue; */
  }

  @media (max-width: 1170px) {
    .mainText {
    font-size: 75px;
    margin-bottom: 1%;
    }
    .mainVault {
        font-size: 100px;
    }
  }

  @media (max-width: 768px) {
    .mainText {
    font-size: 60px;
    margin-bottom: 3%;
    }
    .mainVault {
        font-size: 60px;
    }
  }

  @media (max-width: 660px) {
    .mainText {
    font-size: 40px;
    margin-bottom: 3%;
    }
    .mainVault {
        font-size: 40px;
    }
  }

  @media (max-width: 420px) {
    .mainText {
    font-size: 20px;
    margin-bottom: 3%;
    }
    .mainVault {
        font-size: 20px;
    }
  }
`

export default function Vault() {
    return (
        <>
            <VaultStyle >
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
                <div className="container">
                      <div className="mainContent">
                        <TemporaryDrawer />
                      </div>
                </div>
            </VaultStyle>
        </>
    )
}