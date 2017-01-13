import React       from 'react';
import { getItem } from '../managers/item';

export default class Description extends React.Component {
    render() {
        var item = getItem(this.props.itemId);

        return <div className='box description'>
            { item.description }
        </div>;
    }
}
