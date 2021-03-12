import { CollectionPageContainer, CollectionPageItemsContainer, CollectionPageTitleContainer } from './collection.styles';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux';
import { CollectionItem } from '../../components';

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