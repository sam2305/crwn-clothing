import { Component } from 'react';
import { CustomButton } from '../custom-button';
import { FormInput } from '../custom-input';
import { auth, signInWithGoogle } from '../../firebase';
import { SignInButtonsContainer, SignInContainer, SignInFormContainer, SignInSpanContainer, SignInTitleContainer } from './signin.styles';

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

        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({ email:'', password:''});
        }catch(error){
            console.error(error);
        }

    }
    
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render(){
        const { email , password } = this.state;
        return(
            <SignInContainer>
                <SignInTitleContainer> I already have an account</SignInTitleContainer>
                <SignInSpanContainer>Sign in with your email and password</SignInSpanContainer>

                <SignInFormContainer onSubmit = {this.handleSubmit}>
                    <FormInput name='email' type='email' value={email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={password} required handleChange={this.handleChange} label='Password'/>
                    <SignInButtonsContainer>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>    
                    </SignInButtonsContainer>
                    
                </SignInFormContainer>
            </SignInContainer>
        )
    }

}

export default SignIn;