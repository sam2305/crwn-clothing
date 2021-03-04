import './signup.styles.scss';
import { Component } from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { FormInput } from '../custom-input';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPasword:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ display:'', email:'', password:'', confirmPassword:''});
    }
    
    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render(){
        return(
            <div className ='sign-up'>
                <h2> I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form onSubmit = {this.handleSubmit}>
                    <FormInput name='displayName' type='text' value={this.state.displayName} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='email' type='email' value={this.state.email} required handleChange={this.handleChange} label='Email'/>
                    <FormInput name='password' type='password' value={this.state.password} required handleChange={this.handleChange} label='Password'/>
                    <FormInput name='confirmPassword' type='password' value={this.state.confirmPasword} required handleChange={this.handleChange} label='Confirm Password'/>
                    <CustomButton type='submit'>Sign Up</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp;