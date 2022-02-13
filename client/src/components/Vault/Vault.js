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
    height: 600px;
    position: relative;
    background-color: black;
  }

  .mainContent {
    width: 80%;
    height: 100%;
    background-image: url(${vault});
  }

  .contentBox {
    position: absolute;  
    width: 80%;
    height: 60%;
    top: 15%;
    /* background-color: blue; */
  }

  .mainText:hover {
    color: black;
    font-size: 5rem;
  }

  .mainTextBox {
    position: relative;
    width: 100%;
    height: 30%;
    top: 10%;
    left: 10%;
    cursor: pointer;
    /* background-color: brown; */
  }

  .mainText {
    margin-left: 10%;
    color: white;
    font-size: 4.5rem;
    font-weight: bold;
    cursor: pointer;
    /* background-color: red; */
  }
  
  .mainVaultBox {
    position: absolute;
    width: 100%;
    height: 50%;
    top: 33%;
    left: 10%;
    cursor: pointer;
    /* background-color: red; */
  }

  .mainVault {
      margin-left: 10%;
      color: white;
      font-size: 8.5rem;
      font-weight: bold;
      cursor: pointer;
      /* background-color: blue; */
  }

  .mainVault:hover {
    color: black;
    font-size: 9rem;
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