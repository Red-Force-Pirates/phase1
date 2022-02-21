import * as React from 'react';
import { Avatar, Button, Grid, Paper, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

import styledcompoent from 'styled-components';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:"black",
  color: "white", 
  width: "100%", 
  border: "2px solid white", 
  ...theme.typography.body2,
  display:"flex" , 
  textAlign: 'center',
  justifyContent:"center",
}));

const CrewContainer = styled(Grid)(({ theme }) => ({
  direction: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "17.8rem"
}));

const StyledAvatar = styled(Avatar)(() => ({
  position: "relative", 
  top: "1rem", 
  border: "7px solid white", 
  width: "8rem", 
  height: "8rem"
}));

const ContainerStyle = styledcompoent.div`
   .container{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
    background-color: black;
  }

  .mainContents {
    width: 80%;
    height: 100%;
  }

  .pfpContainer {
    height: 7rem;
  }

  .crewHeader {
    font-family: 'Permanent Marker', cursive;
    font-size: 1.2rem;
    height: 5rem; 
    padding-top: 3rem;
    border-bottom: 0;
  }

  .crewFooter {
    font-family: 'Permanent Marker', cursive;
    display: flex;
    justify-content : space-between;
  }

  .crewFooterContent {
    display: inline-block;
    font-size: 1.2rem;
    margin: 20px;
  }

  .crewContent {
    font-size: 1rem;
    height: 4rem;
    border-top: 0;
    border-bottom: 0;
  }

  
`
const crewFooterContainer = { height: "4rem", 
  borderTop:0, 
  flexDirection:"column", 
  justifyContent: "space-around", 
  flexWrap: "wrap" 
};

const Test = () => {
  return(
      <Grid
        className='crewlistContainer'
        container
        sx={{disply:"inline-flex"}}
        justifyContent="center"
        alignItems="center"
      >
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/crewprofile/jeanx.jpg"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            Creative Director
            <br/>
            jeanx#0001
          </Item>
          <Item className='crewContent' square >
            “그 누구도 막을 수 없게 될 거요···!!! 
            <br/>
            폭주하는 이 시대를!!!”
            <br/>
            3줄은 ㄱㅊ?
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @Dogedoil
              </div>
              <div className='crewFooterContent'>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/crewprofile/benbeckat.jpg"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            rapper
            <br/>
            ben beckat#0002
          </Item>
          <Item className='crewContent' square >
            “그 누구도 막을 수 없게 될 거요···!!! 
            <br/>
            폭주하는 이 시대를!!!”
            <br/>
            3줄은 ㄱㅊ?
            <br/>
            3줄까지만
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @Jhin_93
              </div>
              <div className='crewFooterContent'>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/crewprofile/woogi.jpg"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            winboong
            <br/>
            woogi#0003
          </Item>
          <Item className='crewContent' square >
            “그 누구도 막을 수 없게 될 거요···!!! 
            <br/>
            폭주하는 이 시대를!!!”
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @Dogedoil
              </div>
              <div className='crewFooterContent'>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/1.png"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            winboong
            <br/>
            wonny#0004
          </Item>
          <Item className='crewContent' square >
            “그 누구도 막을 수 없게 될 거요···!!! 
            <br/>
            폭주하는 이 시대를!!!”
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @Dogedoil
              </div>
              <div className='crewFooterContent'>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/1.png"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            winboong
            <br/>
            jingbe#0005
          </Item>
          <Item className='crewContent' square >
            “그 누구도 막을 수 없게 될 거요···!!! 
            <br/>
            폭주하는 이 시대를!!!”
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @Dogedoil
              </div>
              <div className='crewFooterContent'>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/1.png"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            winboong
            <br/>
            sky#0006
          </Item>
          <Item className='crewContent' square >
            “그 누구도 막을 수 없게 될 거요···!!! 
            <br/>
            폭주하는 이 시대를!!!”
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @Dogedoil
              </div>
              <div className='crewFooterContent'>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/1.png"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            designer
            <br/>
            design#0007
          </Item>
          <Item className='crewContent' square >
            “그 누구도 막을 수 없게 될 거요···!!! 
            <br/>
            폭주하는 이 시대를!!!”
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @Dogedoil
              </div>
              <div className='crewFooterContent'>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
      </Grid>
  )
}


export default function Crew() {
  return (
    <ContainerStyle >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      <div className="container">
        <div className="mainContents">
            <Test></Test>
        </div>
      </div>
    </ContainerStyle>
  );
}


