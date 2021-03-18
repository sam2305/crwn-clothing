import CollectionItem from '../collection-item/collection-item.component';
import { withRouter } from 'react-router-dom';

import { CollectionPreviewContainer, CollectionPreviewItemContainer, CollectionPreviewTitleContainer } from './collection-preview.styles';


const CollectionPreview = ({title, items, history, match, routeName}) => (
    <CollectionPreviewContainer>
        <CollectionPreviewTitleContainer onClick={()=>history.push(`${match.path}/${routeName}`)}>{title}</CollectionPreviewTitleContainer>
        <CollectionPreviewItemContainer>
            {
                items.filter((item, index) => index < 4).map((item) => <CollectionItem key={item.id} item={item}/>)
            }
        </CollectionPreviewItemContainer>
    </CollectionPreviewContainer>
)

export default withRouter(CollectionPreview);