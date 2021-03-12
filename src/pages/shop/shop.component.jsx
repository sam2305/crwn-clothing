import { ShopPageContainer } from './shop.styles';
import { CollectionsOverview } from '../../components';
import { Switch, Route } from 'react-router';
import { CollectionPage } from '../collection';


const ShopPage = ({match}) =>(
    <ShopPageContainer>
        <Switch>
            <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
            <Route exact path={`${match.path}/:collectionId`} component={CollectionPage}></Route>
        </Switch>
        
    </ShopPageContainer>
)
export default ShopPage;