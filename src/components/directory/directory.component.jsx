import {DirectoryContainer} from './directory.styles';
import { MenuItem } from '../menu-item';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../../redux';

const Directory = ({sections})=> (
    <DirectoryContainer>
        {
            sections.map(({id, ...otherProps }) => <MenuItem key={id} {... otherProps}/>)
        }
    </DirectoryContainer>
);
   
const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory);