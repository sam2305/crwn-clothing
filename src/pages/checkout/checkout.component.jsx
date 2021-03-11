import './checkout.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux';
import { CheckoutItem } from '../../components';

const CheckoutPage = ({ cartItems, total}) => (
    <div class='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span> 
            </div>
            <div className='header-block'>
                <span>Description</span> 
            </div>
            <div className='header-block'>
                <span>Quantity</span> 
            </div>
            <div className='header-block'>
                <span>Price</span> 
            </div>
            <div className='header-block'>
                <span>Remove</span> 
            </div>
        </div>
        { cartItems.map( cartItem=> <CheckoutItem key={cartItem.id} item={cartItem}/>)}
        <div class='total'>
            <span>Total: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})
export default connect(mapStateToProps)(CheckoutPage);