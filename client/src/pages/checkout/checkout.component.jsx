import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';
import { CheckoutHeaderContainer, CheckoutPageContainer, TotalContainer, WarningContainer } from './checkout.styles';

const CheckoutPage = ({ cartItems, total}) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <CheckoutHeaderContainer>
                <span>Product</span> 
            </CheckoutHeaderContainer>
            <CheckoutHeaderContainer>
                <span>Description</span> 
            </CheckoutHeaderContainer>
            <CheckoutHeaderContainer>
                <span>Quantity</span> 
            </CheckoutHeaderContainer>
            <CheckoutHeaderContainer>
                <span>Price</span> 
            </CheckoutHeaderContainer>
            <CheckoutHeaderContainer>
                <span>Remove</span> 
            </CheckoutHeaderContainer>
        </CheckoutHeaderContainer>
        { cartItems.map( cartItem=> <CheckoutItem key={cartItem.id} item={cartItem}/>)}
        <TotalContainer>
            <span>Total: ${total}</span>
        </TotalContainer>
        <WarningContainer>
            *Please use the following test credit card for payments 
            <br/>
            4242 4242 4242 4242 - Exp: 08/21  - CVV: 812
        </WarningContainer>
        <StripeCheckoutButton price={total}/>
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);