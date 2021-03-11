import './checkout-item.styles.scss';
import { connect } from 'react-redux';

const CheckoutItem = ({ item: { imageUrl, price, name, quantity }, dispatch}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>{quantity}</span>
        <span className='price'>${price}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
)


export default connect(null)(CheckoutItem);