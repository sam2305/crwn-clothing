import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase';
import  { connect } from 'react-redux';
import { CartIcon } from '../cart-icon';
import { CartDropdown } from '../cart-dropdown';


const Header = ({currentUser, hidden}) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}> 
                    SIGN OUT
                </div>
                : 
                <Link className='option' to='/signin'>
                    SIGN IN
                </Link>
            }
            <CartIcon />
        </div>
        {
            hidden ? null: <CartDropdown />
        }
        
    </div>
)

const mapStateToProps = ({user: { currentUser }, cart:{ hidden } }) =>({
    currentUser:currentUser,
    hidden:hidden
});

export default connect(mapStateToProps)(Header);