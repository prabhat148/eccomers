import { useState } from "react";
import styled from "styled-components";
import Announcement from "../component/Announcement";
import Navbar from "../component/Navbar";
import Products from "../component/Products";
import Fotter from "../component/Fotter";
import { mobile } from "../resposive ";
import { useLocation } from "react-router-dom";

export const Container = styled.div``;
const FiltterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Filtter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", felxDirection: "column" })}
`;
const FlitterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: "0px" })}
`;
const Title = styled.h1`
  padding: 20px;
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })};

`;
 const Option = styled.option`
padding:10px ; 
`
const ProductList = () => {
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("NEWEST");

  const handelFilter = (e) => {
    const value = e.target.value;

    setFilter({
      ...filter,
      [e.target.name]: value.toLowerCase(),
    });
  };
 
  ;
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>{cat}</Title>
      <FiltterContainer>
        <Filtter>
          <FlitterText>Filterr Products :</FlitterText>
          <Select name="color"  onChange={handelFilter}>
            <Option disabled >Color</Option>
            <Option >red</Option>
            <Option >green</Option>
            <Option>yellow</Option>
            <Option>blue</Option>
            <Option >white</Option>
          </Select>
          <Select name="size"  onChange={handelFilter}>
            <Option disabled>Size</Option>
            <Option>XL </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>m</Option>
            <Option>L</Option>
          </Select>
        </Filtter>
        <Filtter>
          <FlitterText>Short Products :</FlitterText>
          <Select
            value=""
            onChange={(e) => {
              setSort(e.target.value.toLowerCase());
            }}
          >
            <Option>NEWEST</Option>
            <Option>ASC</Option>
            <Option>DESC</Option>
          </Select>
        </Filtter>
      </FiltterContainer>
      <Products  cat ={cat} filter={filter} sort={sort}/>
      <Fotter />
    </Container>
  );
};

export default ProductList;
