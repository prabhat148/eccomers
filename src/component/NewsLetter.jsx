
import { SendOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../resposive ';

 const Container = styled.div`
   height:60vh;
   background-color:#c7b6b5;
   display:flex;
   align-items:center;
   justify-content:center;
   flex-direction:column
`
const Title=styled.h1`
font-size:70px;
margin:20px;
${mobile ({fontSize:'50px'}) }
`
const Discription=styled.div`
font-size:25px;
font-weight:300;
margin-bottom:20px;
${mobile({textAlign:'center',fontSize:'14px'}) }

`
const InputContainer=styled.div`
width:50%;
height:40px;
background-color:white;
display:flex;
justify-content:space-between;
border: 1px solid lightgray;
${mobile ({width:'80%'}) }
`
const Input =styled.input`
border:none;
flex:8;
padding-left:20px

`
const Button=styled.button`
flex:1;
border:none;
background-color:teal;
color:white;
`


const NewsLetter = () => {
  return (
    <Container>
      <Title>NewsLetter</Title>
      <Discription>Get TIMeLY UPDATE On  YOUR favorate product</Discription>
      <InputContainer>
          <Input placeholder='Your email' />
          <Button>
           <SendOutlined/>
          </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter

