define(['react', 'components/location', 'components/item'], function (R, locationComponent, itemComponent) {
    return R.createClass({
        render: function () {
            var items = [
                    R.createElement(itemComponent, { label: 'item' }),
                    R.createElement(itemComponent, { label: 'item' })
                ],
                locationText = 'This is an example of game location text. There is a random ' + items[0] + ' in this text. And another random ' + items[1] + ' here.',
                locationElement = R.createElement(locationComponent, { text: locationText });
            
            return <div>Hello {this.props.name}</div>;
            return R.DOM.div({ className: 'game' }, locationElement);
        }
    });
});
