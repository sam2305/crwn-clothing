import './stripe-button.styles.scss';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({price})=> {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51ITvPvCtzG3N1WzK7Xv4meARIoaN5C8lxzSpgJyzoaMaj0PB8qWU5udmbqBRtTI9wYhJQHj7if8im3GWVYTOaiBR00iNseCEku';
    const onToken= token=> {
         alert('Payment Successful');
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
