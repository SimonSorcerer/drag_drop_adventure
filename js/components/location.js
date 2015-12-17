define(['react'], function (R) {
    return R.createClass({
        render: function () {
            return R.DOM.p({ className: 'location' }, this.props.text);
        }
    });
});
