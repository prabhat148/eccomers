import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons'
import React, { useState } from 'react'
import styled from 'styled-components'
import  {SliderItems} from '../component/Data.js'
import { mobile } from '../resposive .jsx';


const Container = styled.div`
width: 100%;
height: 82vh;
display:flex;
 position:relative;
  overflow:hidden;
  ${mobile ({display:'none'}) }
`;

const Arrow =styled.div`
width:50px;
height:50px;
background-color: white;
border-radius: 50%;
cursor : pointer;
display:flex;
align-items:center;
justify-content:center;
opacity:70%;
position: absolute;
top:0;
bottom:0;
margin: auto;
left :${props => props.Direction === "left" &&" 10px"};
right :${props => props.Direction === "right" &&" 10px"};
z-index:2;
`;

const Wrapper =styled.div`
  
  display:flex;
  transition: all 1.5s ease ;
  transform:translateX(${props => props.Index * -100}vw);
`;

const Slide =styled.div`
width:100vw;
height:100vh;
display:flex;
align-items:center;

`;

const Imagecontener =styled.div`
height:100%;
flex:1;
`;

const Info =styled.div`
flex:1;
padding:50px;


`; 

const Image =styled.img`
height:80%;

`;

const Tile = styled.h1`
  font-size:78px;

`;

const Disc = styled.p`
 margin: 50px 0px;
 font-size:20px;
 font-weight:500;
 letter-spacing:3px
`;

const Button = styled.button`
 padding:7px;
 font-size:20px;
 background-color:white;
 color:black;
 border-radius:10px;
 cursor:pointer;

`;

 
const Slider = () => {

  const [slideIndex,setslideIndex]=useState(0);

  const handelclick =(direction) =>{

    if(direction === "left"){
      setslideIndex(slideIndex > 0 ? slideIndex -1:2);
    }
    else{
      setslideIndex(slideIndex < 2 ? slideIndex +1:0);
    }
     
  };
  return (
   <Container>
    <Arrow Direction='left'  onClick={()=>handelclick('left')}>
      <ArrowLeftOutlined  />

     </Arrow>
        <Wrapper Index={slideIndex}>
         { SliderItems.map(item =>(

          <Slide key={item.id}>
            <Imagecontener>
              <Image src={item.img}/>
            </Imagecontener>
            <Info>
              <Tile>{item.title}</Tile>
              <Disc>{item.disc}</Disc>
              <Button>Shop Now</Button>
            </Info>
          </Slide>
          ) )}
        </Wrapper>
      <Arrow  Direction='right' onClick={()=>handelclick('right')} >
       <ArrowRightOutlined />

       </Arrow>

   </Container>
  )
}

export default Slider

