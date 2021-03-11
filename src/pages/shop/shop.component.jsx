import './shop.styles.scss';
import { CollectionsOverview } from '../../components';
import { Switch, Route } from 'react-router';
import { CollectionPage } from '../collection';


const ShopPage = ({match}) =>(
    <div className='shop-page'>
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
        </Switch>
        
    </div>
)
export default ShopPage;