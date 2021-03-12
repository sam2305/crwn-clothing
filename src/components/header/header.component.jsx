import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase';
import  { connect } from 'react-redux';
import { CartIcon } from '../cart-icon';
import { CartDropdown } from '../cart-dropdown';
import { selectCartHidden, selectCurrentUser } from '../../redux';
import { createStructuredSelector } from 'reselect';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles';


const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {
                currentUser ? 
                <OptionLink as='div' onClick={() => auth.signOut()}> 
                    SIGN OUT
                </OptionLink>
                : 
                <OptionLink to='/signin'>
                    SIGN IN
                </OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ? null: <CartDropdown />
        }
        
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectCartHidden
});

export default connect(mapStateToProps)(Header);