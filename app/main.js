import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from 'containers/Root';

import 'file?name=[name].[ext]!./.htaccess';
import 'sanitize.css/sanitize.css';
import 'gsap/src/minified/TweenMax.min.js';

import 'styles/base';

render(<Root />, document.getElementById('root'));
