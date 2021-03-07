import './authpage.styles.scss';
import { SignIn, SignUp } from '../../components';

const AuthPage = () => (
    <div className='sign-in-and-sign-up'> 
        <SignIn /> 
        <SignUp />
    </div>
)

export default AuthPage;