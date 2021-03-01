import { Component } from 'react';
import './directory.styles.scss';
import {MenuItem} from '../menu-item';
import {SECTIONS} from './directory.data';

export class Directory extends Component {
    constructor(props){
        super(props);
        this.state = {
            sections: SECTIONS
        }
    }    

    render(){
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({id, ...otherProps }) => <MenuItem key={id} {... otherProps}/>)
                }
            </div>
        );
    }
}

export default Directory;