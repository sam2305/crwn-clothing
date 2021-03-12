import { connect } from 'react-redux';
import { CartItem } from '../cart-item';
import { selectCartItems, toggleCartHidden } from '../../redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom'
import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer ,CartDropdownButton } from './cart-dropdown.styles';


const CartDropdown = ({ cartItems,history,dispatch}) =>(
    <CartDropdownContainer>
        <CartItemsContainer>
            {
                cartItems.length ?
                (cartItems.map( cartItem => <CartItem key={cartItem.id} item={cartItem} />))
                : (<EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>)

            }
        </CartItemsContainer>
        <CartDropdownButton onClick={()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>GO TO CHECKOUT</CartDropdownButton>
    </CartDropdownContainer>
)


const mapStateToProps= createStructuredSelector({
    cartItems:selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
