import { SignIn, SignUp } from '../../components';
import { SignInAndSignUpContainer } from './authpage.styles';

const AuthPage = () => (
    <SignInAndSignUpContainer> 
        <SignIn /> 
        <SignUp />
    </SignInAndSignUpContainer>
)

export default AuthPage;