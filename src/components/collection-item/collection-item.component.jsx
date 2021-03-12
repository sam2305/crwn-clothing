import { connect } from 'react-redux';
import { addItem } from '../../redux';
import { CollectionItemContainer, CollectionItemFooterContainer, CollectionItemImageContainer, CollectionItemNameContainer, CollectionItemPriceContainer,
    CollectionItemButtonContainer } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    console.log(item);
    const { name, price, imageUrl } = item
    return(
        <CollectionItemContainer>
            <CollectionItemImageContainer className='image' imageUrl={imageUrl}/>
            <CollectionItemFooterContainer>
                <CollectionItemNameContainer> {name} </CollectionItemNameContainer>
                <CollectionItemPriceContainer> ${price} </CollectionItemPriceContainer>
            </CollectionItemFooterContainer>
            <CollectionItemButtonContainer className='button' inverted onClick={() => addItem(item)}> Add To Cart</CollectionItemButtonContainer>
        </CollectionItemContainer>
    );
}
    

const mapDispatchToProps = dispatch => ({
    addItem:(item) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);