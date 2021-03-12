import { connect } from 'react-redux';
import { addItem, clearItemFromCart, removeItem } from '../../redux';
import { CheckoutItemContainer, CheckoutItemImageContainer, CheckoutItemImage,
CheckoutItemTextContainer, CheckoutItemArrowContainer, CheckoutItemQuantityContainer,
CheckoutItemQuantity, CheckoutItemRemoveButtonContainer } from './checkout-item.styles';

const CheckoutItem = ({ item, dispatch}) => {    
    const { imageUrl, price, name, quantity } = item;
    return (
        <CheckoutItemContainer>
            <CheckoutItemImageContainer>
                <CheckoutItemImage src={imageUrl} alt='item' />
            </CheckoutItemImageContainer>
            <CheckoutItemTextContainer>{name}</CheckoutItemTextContainer>
            <CheckoutItemQuantityContainer> 
                <CheckoutItemArrowContainer onClick={() => dispatch(removeItem(item))}>&#10094;</CheckoutItemArrowContainer> 
                <CheckoutItemQuantity>{quantity}</CheckoutItemQuantity> 
                <CheckoutItemArrowContainer onClick={() => dispatch(addItem(item))}>&#10095;</CheckoutItemArrowContainer>
            </CheckoutItemQuantityContainer>
            <CheckoutItemTextContainer>${price}</CheckoutItemTextContainer>
            <CheckoutItemRemoveButtonContainer onClick={() => dispatch(clearItemFromCart(item))}>&#10005;</CheckoutItemRemoveButtonContainer>
        </CheckoutItemContainer>
    )
 }


export default connect(null)(CheckoutItem);