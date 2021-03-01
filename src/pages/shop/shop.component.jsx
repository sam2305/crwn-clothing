import './shop.styles.scss';
import {CollectionPreview} from '../../components';
import { Component } from 'react';
import SHOP_DATA from './shop.data';


class ShopPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;
        return (
            <div>
                {
                    collections.map(({id, ...otherCollectionProps}) => <CollectionPreview key={id} {...otherCollectionProps}/>)
                }
            </div>
        )
    }
}

export default ShopPage;