import 'babel-polyfill';

import React from 'react';
import {render} from 'react-dom';
import Root from 'Root';
import 'file?name=[name].[ext]!./.htaccess';
import 'sanitize.css/sanitize.css';
require('gsap');

render(<Root />, document.getElementById('root'));
