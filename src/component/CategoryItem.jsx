import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { mobile } from '../resposive ';



const Conteiner =styled.div`
flex:1;
margin:3px;
height:70vh;
position:relative;
`
const Image=styled.img`

width: 100%;
height:100%;
object-fit:cover;
${mobile ({height:'45vh'}) }

`
const Info =styled.div`

position:absolute;
left:0;
top:0;
width: 100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;


`;

const Title=styled.h1`
color:white;
margin-bottom:20px;
`;


const Button =styled.button`
border:none;
padding:10px;
background-color:white;
color:gray;
cursor:pointer;
font-weight:600;
`

const CategoryItem = ({items}) => {
  return (
    <Conteiner>
    <Link to={`/products/${items.cat}`}>

    <Image src={items.img} />

    <Info>

      <Title>{items.title}</Title>
       <Button>Shop Now</Button>
      
    </Info>
    </Link>
    
    </Conteiner>
  )
}

export default CategoryItem
