import React,{useState} from 'react';
import main from '../assets/img/main.png'
import styled from 'styled-components';


const MainStory = styled.div`
  
  .container11{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* height: 100vh; */
    position: relative;
    background-color: darkgray;
  }
  .container22{
      width: 80%;
      position: absolute;
      /* position: relative; */
    margin: auto;

  }

  .containerbutton{
    width: 150px;
    margin: auto;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }
  
  .containerbutton:hover{
    transform: scale(1.1);
    /* 지정한 사이즈에서 키우기 */
    /* box-sizing: 0px 0px 15px 10px; */
  }


  .containertext{
    bottom: 10%;
    width: 100px;
    /* background-color: blue; */
    position: absolute;
    color: white;
    font-size: 30px;
    
  }

  .Image{
    width: 250px;
    height: 300px;
    justify-content: center;
    align-items: center;
    }
  
  .Image:hover{
    background: silver;
  }

  

  .button1 {
    width: 100px;
    padding: 160px 100px;
    border-radius: 4px;
    border: none;
    background: #141414;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
  }
  font-family: 'Roboto', sans-serif;

  .mainImg {
    width: 100%;
  }
`;



function Home() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);
  const [showModal6, setShowModal6] = useState(false);

  const openModal1 = () => {
    setShowModal1(prev => !prev);
  };

  const openModal2 = () => {
    setShowModal2(prev => !prev);
  };

  const openModal3 = () => {
    setShowModal3(prev => !prev);
  };

  const openModal4 = () => {
    setShowModal4(prev => !prev);
  };

  const openModal5 = () => {
    setShowModal5(prev => !prev);
  };

  const openModal6 = () => {
    setShowModal6(prev => !prev);
  };
  

  return (
    <>
      {/* <Container> */}
        <MainStory >
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@1,900&display=swap" rel="stylesheet" />
              <div className='container11'>
                <img className="mainImg" alt="main" src={main}></img>
              </div>
              
              
        </MainStory>
    </>
  );
}




export default Home;