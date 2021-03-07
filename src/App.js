import './App.css';
import { Switch, Route } from 'react-router-dom';
import {HomePage, ShopPage, SignInAndSignUpPage} from './pages';
import { Header } from './components';
import { auth, createUserProfielDocument } from './firebase';
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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfielDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          }, ()=> {
            console.log(this.state);
          });
          
        });

        
      }else{
        // this.setState((prevState, prevProps)=> ({currentUser:prevState.currentUser + prvProps}))
        this.setState({ currentUser: userAuth})
      }
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
