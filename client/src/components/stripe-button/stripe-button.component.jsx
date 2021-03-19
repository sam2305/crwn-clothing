import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';


const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ITvPvCtzG3N1WzK7Xv4meARIoaN5C8lxzSpgJyzoaMaj0PB8qWU5udmbqBRtTI9wYhJQHj7if8im3GWVYTOaiBR00iNseCEku';
    const onToken= token=> {
        axios({
           url:'payment',
           method:'post',
           data:{
               amount: priceForStripe,
               token
           }
        }).then(response => {
            console.log(response);
            alert('Payment Successful');
        }).catch(error=>{
            console.log('Payment error: ', JSON.parse(error));
            alert('There was an issue with your payment. Please use the provided credit card.');
        })
         
    }
    return (
        <StripeCheckout
         label = 'Pay Now'
         name = 'CRWN Clothing Ltd.'
         billingAddress
         shippingAddress
         image='https://svgshare.com/i/CUz.svg'
         description={`Your total is $${price}`}
         amount={priceForStripe}
         panelLabel='Pay Now'
         token={onToken}
         stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
