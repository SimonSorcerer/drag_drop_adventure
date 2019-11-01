import './styles/reset.css';
import './styles/basic.css';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import reducers from './reducers/index'
import Game from './components/game.jsx';

let store = createStore(reducers);

render(
    <Provider store={ store }>
        <Game />
    </Provider>,
    document.getElementById('root')
)
