import './App.css';
import { Switch, Route } from 'react-router-dom';
import {HomePage, ShopPage} from './pages';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
