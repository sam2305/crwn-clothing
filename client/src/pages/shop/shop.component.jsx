import { ShopPageContainer } from './shop.styles';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { Switch, Route } from 'react-router';
import { useEffect } from 'react';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { connect } from 'react-redux';


const ShopPage = ({ fetchCollectionsStart, match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <ShopPageContainer>
            <Switch>
                <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}></Route>
                <Route exact path={`${match.path}/:collectionId`} component={CollectionPageContainer}></Route>
            </Switch>

        </ShopPageContainer>
    );


}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})
export default connect(null, mapDispatchToProps)(ShopPage);