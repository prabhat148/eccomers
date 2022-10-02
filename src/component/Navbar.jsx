import React from "react";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { mobile} from "../resposive "
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Container =styled.div`
 height: 60px;
    padding: 10px;
   ${mobile ({height:'50px'}) }
`
const Wrapper=styled.div`
 padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mobile ({padding:'10px 0px'}) }

`
const Left=styled.div`
flex:1;
display:flex;
align-items:center;

`
const Language=styled.span`
font-size:14px;
cursor:pointer;
${mobile ({display:'none'}) }
`
const SearchContainer=styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    margin-left: 25px;
    padding: 5px;
    ${mobile ({marginLeft:'10px'}) }
`
const Input=styled.input`
  border: none;
  ${mobile ({width:'50px'}) }

`
const Center=styled.div`
flex:1;
text-align:center;

`
const Logo=styled.h1`
   font-weight: bold;
    font-size: 35px;
    text-shadow: 3px 5px 8px #100202fa;
    ${mobile ({fontSize:'24px'}) }
`
const Right=styled.div`
    flex:1;
    display: flex;
    justify-content: flex-end;
    margin-left: 25px;
    ${mobile ({justifyContent:'center',flex:2}) }
`
const MenuItems=styled.div` 
font-size:14px;
   margin: 10px 20px;
    cursor: pointer;
    ${mobile ({bfontSize:'12px', marginLeft:'10px'}) }
`


const Navbar = () => {
    const quantity = useSelector(state =>state.cart.quantity)
  return (
    <Container>
        <Wrapper>
         <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input placeholder="Search"/>
                <SearchIcon style={{color:'gray',fontSize:"16px"}}/>
            </SearchContainer>
         </Left>
         <Center>
            <Logo>BOSS.</Logo>
         </Center>
         <Right>

         <Link to ="/register">
            <MenuItems style={{fontWeight:'bold'}}>Regiter</MenuItems>
         </Link>
            <MenuItems style={{fontWeight:'bold'}}>SingIn</MenuItems>

            <Link to={'/cart'}>
            <MenuItems><Badge badgeContent={quantity} color="primary">
                <ShoppingCart/>
            </Badge></MenuItems>
            </Link>
         </Right>
        </Wrapper>
    </Container>
  )
 
      
}

export default Navbar;
