import React                    from 'react';
import { getItem }              from '../managers/item';
import { register, eventTypes } from '../managers/bus';

export default class Description extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            minimized: true,
            itemId: null
        };

        register(eventTypes.description, (payload) => {
            if (payload.id) {
                this.setState({ itemId: payload.id, minimized: false });
            }
        });
    }

    getDescription(itemId) {
        const item = getItem(itemId);

        if (item) {
            return item.description;
        }
        return '';
    }

    render() {
        const className = 'box description' + (this.state.minimized ? ' minimized' : '');
        let description = '';

        if (this.state.itemId) {
            description = this.getDescription(this.state.itemId);
        }

        return <div className={ className }>
            { description }
        </div>;
    }
}
