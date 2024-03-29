import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import rootReducer from './Reducers/RootReducer'

const store = createStore(rootReducer);

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
