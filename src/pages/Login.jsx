import React from 'react'
import styled from '@emotion/styled'
import {mobile} from '../resposive '


const Container =styled.div`
width: 100vw;
height:100vh;
background: linear-gradient(rgba(225,225,225,0.5),rgba(225,225,225,0.5)), url('https://images.pexels.com/photos/4245826/pexels-photo-4245826.jpeg?auto=compress&cs=tinysrgb&w=600') center;
display:flex; 
background-size:cover;
align-items:center;
justify-content:center;
`


const Wrapper=styled.div`
width: 25%;
padding: 20px;
background-color:white;
${mobile({width:'75%'})}

`

const Title =styled.h1`
font-size:24px;
font-weight:300;
`
const Form =styled.form`
display:flex;
flex-direction:column;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin:  10px 0px;
padding:10px;
`


const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
cursor:pointer;
background-color:teal;
color:white;
margin:10px;

&:hover{
    background-color: #e6b2ae;
}
`
const Link=styled.a`
margin:5px 0px;
font-size:12px;
text-decoration:underline;
cursor:pointer; 
`

const Login = ()=> {
  return (
    <Container>
         <Container>
        <Wrapper>
            <Title> Log-In An Account</Title>
            <Form>
                <Input placeholder='user name'/>
                <Input placeholder='password'/>

                <Button>LogIn </Button>
                <Link>DO Not Remember your password click here </Link>
                <Link>Creat account click here </Link>
            </Form>
        </Wrapper>
   </Container>
    </Container>
  )
}

export default Login
