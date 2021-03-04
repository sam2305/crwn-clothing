import './App.css';
import { Switch, Route } from 'react-router-dom';
import {HomePage, ShopPage, SignInAndSignUpPage} from './pages';
import { Header } from './components';
import { auth } from './firebase';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentUser: null 
    }
  }
  
  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
        <Header currentUser = { this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}

export default App;
