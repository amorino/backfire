import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Root from 'containers/Root';

import 'file?name=[name].[ext]!./.htaccess';
import 'sanitize.css/sanitize.css';
import 'styles/base';
import 'gsap/src/minified/TweenMax.min.js';

render(<Root />, document.getElementById('root'));
