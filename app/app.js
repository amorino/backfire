require('gsap');

import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
// import 'file?name=[name].[ext]!./.htaccess';
// import './styles/fonts.css';
// import './styles/main.css';
import 'normalize.css';
import './styles/main.styl';

render(<Root/>, document.getElementById('root'));
