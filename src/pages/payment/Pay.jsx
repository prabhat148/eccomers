import {useState,useEffect} from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios'

const key ='pk_test_51LZsBxSGtHkqg4qv9tWDrtPqC4v3oSavTecmbYEwDX1aKGBgDFssIZoaToRcuzw5dKeiEDYcrg7F3i0MQeFcjaBP00UbeLnQXQ' 

function Pay() {
    const [stripeToken,setStripeToken] = useState(null);

    useEffect(() => {
          const makeRequest = async()=>{
            try {
              const res = await  axios.post("http://localhost:4000/api/payment/payment",{
                tokenId:stripeToken.id,
                amount:200
              })
              console.log(res.data)
            } catch (error) {
                console.log(error)
            };
          } ;
          setStripeToken && makeRequest()
    },[stripeToken]);

    const onToken=(token)=>{
        setStripeToken(token)
    }
  return (
    <div style={
       { 
        height:'100vh',
        display:'flex',
        alignItem:'center',
        justifyContent:'center'
        }
    }>
    <StripeCheckout
      name='Boss'
      billingAddress
      shippingAddress
      description='your total amount is 20$'
      amount={200}
      token={onToken}
      stripeKey={key}
    >

    <button style={{
        border:'none',
        width:120,
        borderRadius:'5',
        padding:'20px'
    }}>Pay</button>
      
    </StripeCheckout>
    </div>
  )
}

export default Pay
