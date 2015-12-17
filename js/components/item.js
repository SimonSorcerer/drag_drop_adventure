define(['react'], function (R) {
    return R.createClass({
        render: function () {
            return R.DOM.span({ className: 'item' }, this.props.label);
        }
    });
});
