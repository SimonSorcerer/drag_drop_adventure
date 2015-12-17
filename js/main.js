define(['react', 'components/game'], function (R, gameComponent) {
    var root = document.body;

    function renderApp(parent, data) {
        var gameElement = R.createElement(gameComponent, { data: data })

        R.render(gameElement, parent);
    }

    renderApp(root, {});
});
