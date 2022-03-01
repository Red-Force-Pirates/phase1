import * as React from 'react';
import { Avatar, Button, Grid, Paper } from '@mui/material';

import styledcompoent from 'styled-components';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:"black",
  color: "white", 
  width: "100%", 
  border: "1px solid white", 
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
  border: "4px solid white", 
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
  
  .crewFollow {
    display: inline-block;
    font-size: 1.2rem;
    margin: 20px;
    cursor: pointer;
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
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @Dogedoil
              </div>
              <div className='crewFollow' onClick={()=>window.open('https://twitter.com/Dogedoils/')}>
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
            vice-captain
            <br/>
            ben beckat#0002
          </Item>
          <Item className='crewContent' square >
          “우리랑 한판 뜨고 싶다면 
          <br/>
          군함이라도 끌고 와라”
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @Jhin_93
              </div>
              <div className='crewFollow' onClick={()=>window.open('https://twitter.com/Jhin_93/')}>
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
            ship-doctor
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
                @Seongwook9
              </div>
              <div className='crewFollow' onClick={()=>window.open('https://twitter.com/Seongwook9')}>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/61.png"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            chef
            <br/>
            seungjae#0004
          </Item>
          <Item className='crewContent' square >
            “그 누구도 막을 수 없게 될 거요···!!! 
            <br/>
            폭주하는 이 시대를!!!”
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              {/* <div className='crewFooterContent'>
                @Seongwook9
              </div> */}
              <div className='crewFollow' onClick={()=>window.open('https://twitter.com/DaoPirates')}>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/2.png"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            engineer
            <br/>
            wonny#0005
          </Item>
          <Item className='crewContent' square >
            "응~ NFT로 미래 대비하면 그만이야~""
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @JaeWonK<br />
                50350849
              </div>
              <div className='crewFollow' onClick={()=>window.open('https://twitter.com/JaeWonK50350849')}>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/6.png"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            helmsman
            <br/>
            polly#0006
          </Item>
          <Item className='crewContent' square >
            “깨지고 부서져라...!!
            <br/>
            그것이 해적이니까...” (끄덕)
            <br/>
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @PDAO_Polly
              </div>
              <div className='crewFollow' onClick={()=>window.open('https://twitter.com/PDAO_Polly')}>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/9.png"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            archeologist
            <br/>
            sky#0007
          </Item>
          <Item className='crewContent' square >
            “삼천 세계의 검으로 
            <br/>
            이 시대의 합일을 이루어내겠다!!!”
          </Item>
          <Item sx={crewFooterContainer} square >
            
            <div className='crewFooter'>
              <div className='crewFooterContent'>
                @sky_suh
              </div>
              <div className='crewFollow' onClick={()=>window.open('https://twitter.com/sky_suh')}>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer>
        {/* <CrewContainer>
          <Item className='pfpContainer' square >
            <StyledAvatar src="/img/1.png"></StyledAvatar>
          </Item>
          <Item className='crewHeader' square >
            navigator
            <br/>
            design#0008
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
              <div className='crewFollow' onClick={()=>window.open('https://twitter.com/sky_suh')}>
                follow
              </div>
            </div>
          </Item>
        </CrewContainer> */}
      </Grid>
  )
}


export default function Crew() {
  return (
    <ContainerStyle >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Dokdo&family=East+Sea+Dokdo&family=Gothic+A1&family=Gowun+Batang&family=Nanum+Brush+Script&family=Roboto:wght@900&family=Rock+Salt&family=Walter+Turncoat&display=swap" rel="stylesheet" />
      <div className="container">
        <div className="mainContents">
            <Test></Test>
        </div>
      </div>
    </ContainerStyle>
  );
}


