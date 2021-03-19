import { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../custom-input/custom-input.component';
import { SignInButtonsContainer, SignInContainer, SignInFormContainer, SignInSpanContainer, SignInTitleContainer } from './signin.styles';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart }) => {
    const [userCredentials, setCredentials] = useState({ email:'', password:''});
    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();
        emailSignInStart(email, password);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value })
    }

    return (
        <SignInContainer>
            <SignInTitleContainer> I already have an account</SignInTitleContainer>
            <SignInSpanContainer>Sign in with your email and password</SignInSpanContainer>

            <SignInFormContainer onSubmit={handleSubmit}>
                <FormInput name='email' type='email' value={email} required handleChange={handleChange} label='Email' />
                <FormInput name='password' type='password' value={password} required handleChange={handleChange} label='Password' />
                <SignInButtonsContainer>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton type='button' onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                </SignInButtonsContainer>

            </SignInFormContainer>
        </SignInContainer>
    )

}
const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);