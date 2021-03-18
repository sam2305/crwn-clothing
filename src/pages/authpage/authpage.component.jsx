import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';
import { SignInAndSignUpContainer } from './authpage.styles';

const AuthPage = () => (
    <SignInAndSignUpContainer> 
        <SignIn /> 
        <SignUp />
    </SignInAndSignUpContainer>
)

export default AuthPage;