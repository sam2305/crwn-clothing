import './App.css';
import { Switch, Route } from 'react-router-dom';
import {HomePage, ShopPage, SignInAndSignUpPage} from './pages';
import { Header } from './components';
import { auth, createUserProfielDocument } from './firebase';
import { Component } from 'react';
import { connect} from 'react-redux';
import { setCurrentUser } from './redux';
class App extends Component {
  
  unsubscribeFromAuth = null;
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfielDocument(userAuth);

        this.unsubscribeFromSnapshot = userRef.onSnapshot(snapshot => {
          setCurrentUser({
              id: snapshot.id,
              ...snapshot.data()
          });
          
        });

        
      }else{
        // this.setState((prevState, prevProps)=> ({currentUser:prevState.currentUser + prvProps}))
        setCurrentUser(userAuth);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
    this.unsubscribeFromSnapshot();
  }


  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);
