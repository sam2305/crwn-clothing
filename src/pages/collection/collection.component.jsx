import { CollectionPageContainer, CollectionPageItemsContainer, CollectionPageTitleContainer } from './collection.styles';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

const CollectionPage = ({collection })=> {
    const { title, items } = collection
    return (
        <CollectionPageContainer>
            <CollectionPageTitleContainer>{title}</CollectionPageTitleContainer>
            <CollectionPageItemsContainer>
                {
                    items.map( item => <CollectionItem key={item.id} item={item}/>)
                }
            </CollectionPageItemsContainer>
        </CollectionPageContainer>
    )
}

const mapStateToProps= (state, { match: { params: { collectionId }}}) =>({
    collection: selectCollection(collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);