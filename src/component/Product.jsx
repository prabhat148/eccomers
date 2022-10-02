
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Info=styled.div`
opacity:0;
width:100%;
height:100%;
top:0;
left:0;
position: absolute;
display:flex;
align-items:center;
justify-content:center;
z-index:3;
color:white;
background-color:rgba(0,0,0,0.2);
transition:all 0.5s ease;
cursor:pointer;

`


const Container=styled.div`
flex:1;
margin:5px;
min-width:280px;
height:350px;
display:flex;
align-items:center;
justify-content:center;
background-color:#b4becf;
position: relative;

&:hover ${Info}{
  opacity:1;
}
`
const Circle=styled.div`
width:200px;
height:200px;
border-radius:50%;
background-color:white;
position: absolute;


`
const Image=styled.img`
height:75%;
z-index:2;
opacity:80%;

`

const Icon=styled.div`
width:40px;
height:40px;
border-radius:50%;
background-color:gray;
display:flex;
align-items:center;
justify-content:center;
margin:10px;
transition:all 0.5s ease;
&:hover{
  background-color:#e8aba7;
  color:#eb7067;
  transform: scale(1.1);
}
`





const Product = ({item}) => {
  return (
    <Container>
      <Circle/>
      <Image src={item.image} />  
      <Info>
          <Icon>
              <ShoppingCartOutlined/>
          </Icon>
          <Icon>
          <Link to={`product/${item._id}`}>

              <SearchOutlined/>
          </Link>
          </Icon>
          <Icon>
              <FavoriteBorderOutlined/>
          </Icon>
      </Info>
    </Container>
  )
}

export default Product
