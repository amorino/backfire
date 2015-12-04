import 'babel-core/polyfill'
import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root';
import './styles/global.scss';
import './styles/fonts.css';
import 'normalize.css';

render(
    <Root/>, document.getElementById('root'));
