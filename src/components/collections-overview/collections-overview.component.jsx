import './collections-overview.styles.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollectionsForPreview } from '../../redux';
import { CollectionPreview } from '../collection-preview';

const CollectionOverview =({ collections }) => (
    <div className='collections-overview'>
        {
            collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}/>)
        }
    </div>
    
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
});

export default connect(mapStateToProps)(CollectionOverview);