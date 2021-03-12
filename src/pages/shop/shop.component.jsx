import { ShopPageContainer } from './shop.styles';
import { CollectionsOverview, WithSpinner } from '../../components';
import { Switch, Route } from 'react-router';
import { CollectionPage } from '../collection';
import { Component } from 'react';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase';
import { updateCollections } from '../../redux';
import { connect } from 'react-redux';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading:true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { dispatch } = this.props;
        const collectionref = firestore.collection('collections');
        this.unsubscribeFromSnapshot = collectionref.onSnapshot(async snapshot =>{
            dispatch(updateCollections(convertCollectionsSnapshotToMap(snapshot)));
            this.setState({ loading: false});
        })
    }
    
    componentWillUnmount() {
        this.unsubscribeFromSnapshot();
    }

    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
            <ShopPageContainer>
                <Switch>
                    <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}></Route>
                    <Route exact path={`${match.path}/:collectionId`} render={(props) => <CollectionsPageWithSpinner isLoading={loading} {...props} />}></Route>
                </Switch>
                
            </ShopPageContainer>
        );

    }
}

export default connect(null)(WithSpinner(ShopPage));