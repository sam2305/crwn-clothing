import { Component } from 'react';
import { CustomButton } from '../custom-button';
import { FormInput } from '../custom-input';
import { auth, signInWithGoogle } from '../../firebase';
import './signin.styles.scss';

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
            <div className ='sign-in'>
                <h2> I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form className='sign-in-form' onSubmit = {this.handleSubmit}>
                    <FormInput name='email' type='email' value={email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={password} required handleChange={this.handleChange} label='Password'/>
                    <div className='buttons'>
                        <CustomButton type='submit'>Sign In</CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>    
                    </div>
                    
                </form>
            </div>
        )
    }

}

export default SignIn;