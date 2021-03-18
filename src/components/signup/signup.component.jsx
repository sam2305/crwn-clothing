import { SignUpContainer, SignUpFormContainer, SignUpSpanContainer, SignUpTitleContainer } from './signup.styles';
import { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../custom-input/custom-input.component';
import { signUpStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password,confirmPassword} = this.state;
        const { signUpStart } = this.props;
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        signUpStart(email, password, displayName);
    }
    
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    render(){
        const {displayName, email, password,confirmPassword} = this.state;
        return(
            <SignUpContainer>
                <SignUpTitleContainer> I do not have a account</SignUpTitleContainer>
                <SignUpSpanContainer>Sign up with your email and password</SignUpSpanContainer>

                <SignUpFormContainer onSubmit = {this.handleSubmit}>
                    <FormInput name='displayName' type='text' value={displayName} required handleChange={this.handleChange} label='Display Name'/>
                    <FormInput name='email' type='email' value={email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={password} required handleChange={this.handleChange} label='Password'/>
                    <FormInput name='confirmPassword' type='password' value={confirmPassword} required handleChange={this.handleChange} label='Confirm Password'/>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </SignUpFormContainer>
            </SignUpContainer>
        )
    }

}

const mapDispatchToProps = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(signUpStart({ email, password, displayName}))
})
export default connect(null, mapDispatchToProps)(SignUp);