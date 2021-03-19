import { CartItemContainer, CartItemImageContainer, CartItemDetailsContainer, CartItemNameContainer, CartItemPriceContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity }}) => (
    <CartItemContainer>
        <CartItemImageContainer src={imageUrl} alt='item' />
        <CartItemDetailsContainer>
            <CartItemNameContainer>{name}</CartItemNameContainer>
            <CartItemPriceContainer>{quantity} x ${price}</CartItemPriceContainer>
        </CartItemDetailsContainer>
    </CartItemContainer>
)

export default CartItem;