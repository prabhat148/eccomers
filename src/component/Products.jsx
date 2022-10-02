import { useState, useEffect } from 'react'
import styled from 'styled-components';
import { mobile } from '../resposive ';
import Product from './Product';
import axios from 'axios'


const Container = styled.div`
 display:flex;
 flex-wrap:wrap;
 justify-content:space-between;
   padding:20px;
   ${mobile({ padding: '0px' })}
`
const Products = ({ cat, filter, sort }) => {
  const [product, setProduct] = useState([])
  const [filtredProduct, setFilterproduct] = useState([])

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(cat ?
          `http://localhost:4000/api/products?category=${cat}`
          : `http://localhost:4000/api/products`);
        console.log(res.data)
        setProduct(res.data)
      } catch (error) {

      }
    }
    getProducts()
  }, [cat]);



  useEffect(() => {
    cat && setFilterproduct(
            product.filter((item) =>
            Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)))
    )
  }, [product, cat, filter])

  useEffect(() => {
         if ((sort === 'newest')){
          setFilterproduct((prev)=>
          [...prev].sort((a, b)=> a.createdAt - b.createdAt))
         }else  if ((sort === 'asc')){
          setFilterproduct((prev)=>
          [...prev].sort((a, b)=> a.price - b.price))
         }else{
            setFilterproduct((prev)=>
            [...prev].sort((a, b)=> a.createdAt - b.createdAt)) 
         }
  },[sort]);

  
  return (
    <Container>
      {cat ? filtredProduct.map(item => (
        <Product item={item} key={item.id} />
      )):product.slice(0,8).map(item => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Products
