import { SignUpContainer, SignUpFormContainer, SignUpSpanContainer, SignUpTitleContainer } from './signup.styles';
import { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { FormInput } from '../custom-input';
import { auth, createUserProfielDocument } from '../../firebase';

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
        if(password !== confirmPassword){
            alert("Passwords do not match");
            return;
        }
        try{
            const {user} = await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfielDocument(user, {displayName});

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        }catch(error){
            console.error(error);
        }
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

export default SignUp;