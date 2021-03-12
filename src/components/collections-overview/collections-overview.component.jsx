import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux';
import { CollectionPreview } from '../collection-preview';
import { CollectionOverviewContainer } from './collections-overview.styles';

const CollectionOverview =({ collections }) => (
    <CollectionOverviewContainer>
        {
            collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}/>)
        }
    </CollectionOverviewContainer>
    
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);