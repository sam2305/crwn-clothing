import CollectionPage from './collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

const mapStateToProps =  createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
}) 

const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage);

export default CollectionPageContainer;