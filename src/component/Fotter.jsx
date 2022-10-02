import { AlternateEmailOutlined, Facebook, Instagram, LocalPhoneOutlined, Twitter, WhatsApp } from "@material-ui/icons";
import { FmdGoodOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../resposive ";

const Container = styled.div`
  display: flex;
  ${mobile ({flexDirection:'column'}) }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  font-weight: bold;
  font-size: 35px;
  text-shadow: 3px 5px 8px #100202fa;
`;
const Desc = styled.div`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-right: 20px;
`;
// center............

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile ({display:'none'}) }
`;
const Title = styled.h3`
margin-bottom:30px;

`;
const List = styled.ul`
margin:0;
padding:0;
list-style:none;
display:flex;
flex-wrap:wrap;
`;

const ListItems = styled.li`
width:50%;
margin-bottom:10px;

`;
//Right ...............
const Right = styled.div`
  flex: 1;
  padding:20px;
  ${mobile ({backgroundColor:'#e3e1e1'}) }
`;

const ContactItems=styled.div`
margin-bottom:20px;
display:flex;
align-items:center

`
const Payment =styled.img`
width:50%;
height:50%
`

const Fotter = () => {
  return (
    <Container>
      <Left>
        <Logo>Boss.</Logo>
        <Desc>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </Desc>
        <SocialContainer>
          <SocialIcon color="#3f2996">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="#e6376b">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="#2d87d6">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="#22ab3b">
            <WhatsApp />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
          <Title>UseFull Links</Title>
          <List>

              <ListItems>Home</ListItems>
              <ListItems>Cart</ListItems>
              <ListItems>Man Fashion</ListItems>
              <ListItems>Women Fashion</ListItems>
              <ListItems>My Acount</ListItems>
              <ListItems>Track Order</ListItems>
              <ListItems>Wish List</ListItems>
              <ListItems>Wallet</ListItems>
              <ListItems>Refer</ListItems>
              <ListItems>Terms</ListItems>
          </List>

      </Center>
      <Right>
          <Title>Contacts</Title>
          <ContactItems><FmdGoodOutlined style={{marginRight:'10px'}}/>100 Devlopment,Right To The Goal.</ContactItems>

          <ContactItems><LocalPhoneOutlined style={{marginRight:'10px'}}/>123 455 789</ContactItems>
          
          <ContactItems><AlternateEmailOutlined style={{marginRight:'10px'}}/>prabhatproffesion@gmail.com</ContactItems>

          <ContactItems><Payment src='https://www.rhodesgraduation.com/wp-content/uploads/cards.png'/></ContactItems>
      </Right>
    </Container>
  );
};

export default Fotter;
