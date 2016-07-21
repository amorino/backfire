import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from 'containers/Root';

import 'file?name=[name].[ext]!./.htaccess';
import 'sanitize.css/sanitize.css';
import { TweenMax } from 'gsap'; // eslint-disable-line no-unused-vars

import 'styles/base';

render(<Root />, document.getElementById('root'));
