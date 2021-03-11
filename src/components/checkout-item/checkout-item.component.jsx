import './checkout-item.styles.scss';
import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux';

const CheckoutItem = ({ item, dispatch}) => {    
    const { imageUrl, price, name, quantity } = item;
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt='item' />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'> 
                <div className='arrow' onClick={() => dispatch(removeItem(item))}>&#10094;</div> 
                <span className='value'>{quantity}</span> 
                <div className='arrow' onClick={() => dispatch(addItem(item))}>&#10095;</div>
            </span>
            <span className='price'>${price}</span>
            <div className='remove-button' onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</div>
        </div>
    )
 }


export default connect(null)(CheckoutItem);