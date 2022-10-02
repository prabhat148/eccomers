import {useState ,useEffect} from 'react'
import styled from 'styled-components'
import Navbar from '../component/Navbar'
import Announcement from '../component/Announcement'
import Fotter from '../component/Fotter'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../resposive '
import { useSelector } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout'
import {userRequest}from '../requestMethod'
import { BrowserRouter } from "react-router-dom"


const key ='pk_test_51LZsBxSGtHkqg4qv9tWDrtPqC4v3oSavTecmbYEwDX1aKGBgDFssIZoaToRcuzw5dKeiEDYcrg7F3i0MQeFcjaBP00UbeLnQXQ' ;
const Container = styled.div``


const Wapper = styled.div`

padding:20px;

${mobile({ padding: '10px' })}

`

const Title = styled.h1`
font-weight:300;
text-align:center;
`

const Top = styled.div`

display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
`
const TopButton = styled.button`
padding: 10px;
font-weight:600;
cursor:pointer;
border:${props => props.type === 'filled' && "none"};
background-color:${props => props.type === 'filled' ? "black" : 'tranparent'};
color:${props => props.type === 'filled' && "white "};
`
const TopTexts = styled.div`
${mobile({ display: 'none' })}
`

const TopText = styled.span`
text-decoration: underline;
cursor:pointer;
margin: 0px 10px;

`

const Bottom = styled.div`
 display:flex;
 justify-content:space-between;
 ${mobile({ flexDirection: 'column' })}

 `
const Info = styled.p`
 flex:3;
 `
const Product = styled.div`
 display:flex;
 justify-content:space-between; 
 ${mobile({ flexDirection: 'column' })}
 `


const ProductDetail = styled.div`
 flex: 2; 
 display: flex;
 margin:10px
 `
const Image = styled.img`
 width:200px;
 `
const Details = styled.div`
 padding:20px;
 display:flex;
 flex-direction:column;
 justify-content:space-around;
 
 `
const ProductName = styled.span``
const ProductId = styled.span``
const ProductColor = styled.span`
 width:20px;
 height:20px;
 border-radius:50%;
 background-color:${props => props.color}
 `
const ProductSize = styled.span``

const PriceDetail = styled.div`
 flex:1;
 display:flex;
 flex-direction:column;
 align-items:center;
 justify-content:center;
 `

const ProductAmountContainer = styled.div`
 display:flex;
 align-items:center;
 margin-bottom:20px;
 `
const ProductAmount = styled.div`
 font-size:24px;
 margin:5px;
 ${mobile({ margin: '5px 15px' })}
 `
const ProductPrice = styled.div`
 font-size:30px;
 font-weight:200;
 ${mobile({ marginBottom: '20px' })}
 `

const Summery = styled.div`
 flex:1;
border:0.5px solid lightgray;
border-radius:10px;
padding:20px;
height:50vh;
position:static;
 `
const SummeryTitle = styled.h1`
 font-weight:200;
 `
const SummeryItem = styled.div`
 margin: 30px 0px;
 display:flex;
 justify-content:space-between;
 font-weight:${props => props.type === 'total' && '500'};
 font-size:${props => props.type === 'total' && '24px'};
 `
const SummeryItemText = styled.span``
const SummeryItemPrice = styled.span``

const Button = styled.button`
 width:100%;
 padding:10px;
 background-color:black;
 color:white;
 cursor:pointer;
 font-weight:600;
 border-radius:10px;
 
 `



const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stoken ,setStoken]= useState('')

    const history =BrowserRouter()

    const onToken =(token)=>{
        setStoken(token)
    }

    useEffect(() => {
        const makeRequest = async ()=>{
            try {
                const res = await userRequest('/payment/payment',{
                    tokenId: stoken,
                    amount:cart.total *100,
                });
                history.push('/success')
            } catch (error) {
                
            }
        }
           makeRequest()
    },[ cart.total, stoken,history]);
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wapper>
                <Title>Your Bag</Title>
                <Top>
                    <TopButton>Continue Shopping</TopButton>
                    <TopTexts>
                        <TopText>SHOPPING BAG(2)</TopText>
                        <TopText>YOUR WHISHLIST(0)</TopText>
                    </TopTexts>

                    <TopButton type='filled'>Check Out Now</TopButton>
                </Top>
                <Bottom>
                    <Info>
                        {cart.products.map((items) => (


                            <Product>
                                <ProductDetail>
                                    <Image src={items.image} />
                                    <Details>
                                        <ProductName><b>Product:</b>{items.title}</ProductName>
                                        <ProductId><b>ID:</b>{items._id}</ProductId>
                                        <ProductColor color={items.color} />
                                        <ProductSize><b>Size:</b>{items.size}</ProductSize>
                                    </Details>
                                </ProductDetail>
                                <PriceDetail>
                                    <ProductAmountContainer>
                                        <Add />
                                        <ProductAmount>{items.quantity}</ProductAmount>
                                        <Remove />
                                    </ProductAmountContainer>
                                    <ProductPrice>{items.price * items.quantity}$</ProductPrice>
                                </PriceDetail>
                            </Product>
                        ))}
                    </Info>
                    <Summery>
                        <SummeryTitle>Order Summary</SummeryTitle>
                        <SummeryItem>
                            <SummeryItemText>Subtotal</SummeryItemText>
                            <SummeryItemPrice>{cart.total}</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem>
                            <SummeryItemText>Estimated Shipping</SummeryItemText>
                            <SummeryItemPrice>$ 5.2</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem>
                            <SummeryItemText>Shipping Discount</SummeryItemText>
                            <SummeryItemPrice>$ -5.2</SummeryItemPrice>
                        </SummeryItem>
                        <SummeryItem type="total">
                            <SummeryItemText>Total</SummeryItemText>
                            <SummeryItemPrice>$ {cart.total}</SummeryItemPrice>
                        </SummeryItem>
                        <StripeCheckout
                            name='Boss'
                            billingAddress
                            shippingAddress
                            description='your total amount is 20$'
                            amount={cart.amount}
                            token={onToken}
                            stripeKey={key}
                        >

                            <Button> Check out Now</Button>
                        </StripeCheckout>
                    </Summery>
                </Bottom>
            </Wapper>
            <Fotter />


        </Container>
    )
}

export default Cart
