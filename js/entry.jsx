'use strict';

require("../styles/reset.css");
require("../styles/basic.css");

var React = require('react'),
    ReactDOM = require('react-dom'),
    Game = require('components/game.jsx');
    
ReactDOM.render(<Game />, document.getElementById('dda-main'));