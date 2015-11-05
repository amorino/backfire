import 'babel-core/polyfill'
import React from 'react';
import { render } from 'react-dom';
import {createHashHistory, createHistory} from 'history';
import Root from './containers/Root';

const history = process.env.NODE_ENV === 'production' ?
  createHashHistory() :
  createHistory();

render(<Root history={history}/>, document.getElementById('root'));
