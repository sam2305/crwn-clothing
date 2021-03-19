import { SignUpContainer, SignUpFormContainer, SignUpSpanContainer, SignUpTitleContainer } from './signup.styles';
import { useState } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../custom-input/custom-input.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

const SignUp = ({ signUpStart }) => {
    const [userCredentials, setCredentials] = useState({ email: '', password: '', confirmPassword: '', displayName: '' });
    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async event => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        signUpStart(email, password, displayName);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCredentials({ ...userCredentials,[name]: value });
    }
    return (
        <SignUpContainer>
            <SignUpTitleContainer> I do not have a account</SignUpTitleContainer>
            <SignUpSpanContainer>Sign up with your email and password</SignUpSpanContainer>

            <SignUpFormContainer onSubmit={handleSubmit}>
                <FormInput name='displayName' type='text' value={displayName} required handleChange={handleChange} label='Display Name' />
                <FormInput name='email' type='email' value={email} required handleChange={handleChange} label='Email' />
                <FormInput name='password' type='password' value={password} required handleChange={handleChange} label='Password' />
                <FormInput name='confirmPassword' type='password' value={confirmPassword} required handleChange={handleChange} label='Confirm Password' />
                <CustomButton type='submit'>Sign Up</CustomButton>
            </SignUpFormContainer>
        </SignUpContainer>
    )


}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName }))
})
export default connect(null, mapDispatchToProps)(SignUp);