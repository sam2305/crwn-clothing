import { connect } from 'react-redux';
import { selectCartItemsCount, toggleCartHidden } from '../../redux';
import { createStructuredSelector } from 'reselect';
import { CartIconContainer, ShoppingIcon, ItemCountContainer} from './cart-icon.styles';

const CartIcon = ({toggleCartHidden, itemCount}) =>  (

    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIcon />
        <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden:() => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);