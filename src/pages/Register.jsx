import React from 'react'
import styled from 'styled-components'
import { mobile } from '../resposive '

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
width: 40%;
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
flex-wrap:wrap;
`
const Input = styled.input`
flex:1;
min-width:40%;
margin: 20px 10px 0px 0px;
padding:10px;
`

const Agreement=styled.span`
font-size:14px;
margin: 20px 10px;
padding:10px;
`

const Button=styled.button`
width:40%;
border:none;
padding:15px 20px;
cursor:pointer;
background-color:teal;
color:white;

&:hover{
    background-color: #e6b2ae;
}
`

const Register = () => {
  return (
   <Container>
        <Wrapper>
            <Title> Creat An Account</Title>
            <Form>
                <Input placeholder='name'/>
                <Input placeholder='last name'/>
                <Input placeholder='user name'/>
                <Input placeholder='email'/>
                <Input placeholder='password'/>
                <Input placeholder='confirm password'/>

                <Agreement>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."</Agreement>

                <Button>Creat </Button>
            </Form>
        </Wrapper>
   </Container>
  )
}

export default Register
