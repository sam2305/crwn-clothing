import { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../custom-input/custom-input.component';
import { SignInButtonsContainer, SignInContainer, SignInFormContainer, SignInSpanContainer, SignInTitleContainer } from './signin.styles';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        
        const { email , password } = this.state;
        const { emailSignInStart } = this.props;

        emailSignInStart(email,password);
    }
    
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render(){
        const { email , password } = this.state;
        const { googleSignInStart } = this.props;
        return(
            <SignInContainer>
                <SignInTitleContainer> I already have an account</SignInTitleContainer>
                <SignInSpanContainer>Sign in with your email and password</SignInSpanContainer>

                <SignInFormContainer onSubmit = {this.handleSubmit}>
                    <FormInput name='email' type='email' value={email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={password} required handleChange={this.handleChange} label='Password'/>
                    <SignInButtonsContainer>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>    
                    </SignInButtonsContainer>
                    
                </SignInFormContainer>
            </SignInContainer>
        )
    }

}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);