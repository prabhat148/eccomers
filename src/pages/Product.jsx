import styled from '@emotion/styled'
import { useState,useEffect } from 'react'
import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import Announcement from '../component/Announcement'
import Fotter from '../component/Fotter'
import Navbar from '../component/Navbar'
import NewsLetter from '../component/NewsLetter'
import { publicRequest } from '../requestMethod'
import { mobile } from '../resposive '
import { addProduct } from '../redux/cartSlice';
import { useDispatch } from 'react-redux'



const Container =styled.div`
`
const Wrapper = styled.div`
padding: 50px;
display:flex;
${mobile({padding:'10px',flexDirection:'column'})}
`

const ImageContainer = styled.div`
flex: 1;

`
const Image = styled.img`
width:100%;
height: 90vh;
object-fit:cover;
${mobile({height:'40vh'})}
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
${mobile({padding:'10px'})}

`
const Title = styled.h1`
font-weight: 200;

`
const Disc = styled.p`
margin:20px 0px;
`
const PRICE = styled.span`
font-weight:100;
font-size:40px;
`
const FiltterContainer =styled.div`
width:50%;
margin: 30px 0px;
display:flex;
justify-content: space-between;
${mobile({width:'100%'})}
`
const Filter =styled.div`
display:flex;
align-items:center;
`
const FilterTitle =styled.span`
font-size:20px;
font-weight:200;
`
const FilterColor =styled.div`
height:20px;
width:20px;
border-radius:50%;
background-color:${props =>props.color};
margin: 0px 5px;
cursor:pointer;

`
const FilterSize =styled.select`
margin-left:5px;
padding:5px;
`

const FilterSizeOption =styled.option``

const AddContainer =styled.div`
display:flex;
align-items:center;
width: 50%;
justify-content:space-between;
${mobile({width:'100%'})}
`
const AmountContainer =styled.div`
display:flex;
align-items:center;
justify-content:space-between;
font-weight:700;
`
const Amount =styled.span`
width:30px;
height:30px;
border-radius: 10px;
border: 1px solid teal;
display:flex;
align-items:center;
justify-content:center;
margin: 0px 10px;
`
const Button =styled.button`
padding:15px;
border: 2px solid teal;
background-color: white;
cursor:pointer;
font-weight:500;

&:hover{
background-color: #e6b2ae;
}

`              


const Product = () => {
    const location = useLocation();
  const id = location.pathname.split("/")[2];
  const[Product,setProduct]=useState({})
  const[quantity,setQuantity]=useState(1)
  const[color,setColor]=useState(null)
  const[size,setSize]=useState(null)
  const dispatch = useDispatch()

  useEffect(() => {

    const getProduct = async ()=>{
        try {
            const res =await publicRequest.get(`/products/find/${id}`)

            setProduct(res.data)
            
        } catch (err) {
            
        }
    }

     getProduct()    
  },[id]);

  console.log(Product)

  const handequantity= (type)=>{
            if (type === 'dec') {
              quantity > 1 &&  setQuantity(quantity-1 )
            } else {
                setQuantity(quantity+1)
            }
  }

  const handelclick =(e)=>{
     dispatch  ( addProduct({...Product , quantity, color,size}))
  }
  
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
            <ImageContainer>
                <Image src={Product.image}></Image>
            </ImageContainer>
            <InfoContainer>
                <Title>{Product.title}</Title>
                <Disc>{Product.disc}</Disc>
                <PRICE>{Product.price}$</PRICE>
                <FiltterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {Product.color?.map((c) =>(
                       <FilterColor color={c} key={c} onChange={()=>setColor(c)}></FilterColor>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>size</FilterTitle>

                        <FilterSize onChange={(e)=>setSize(e.target.value)}>
                        {Product.size?.map((s)=>(

                        <FilterSizeOption  >{s}</FilterSizeOption>
                        ))}
                        </FilterSize>
                    </Filter>
                </FiltterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove onClick={()=>handequantity('dec')}/>
                        <Amount>{quantity}</Amount>
                        <Add onClick={()=>handequantity('inc')}/>
                    </AmountContainer>
                    <Button onClick={handelclick}>Add to cart</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <NewsLetter/>
        <Fotter/>
    </Container>
  )
}

export default Product
