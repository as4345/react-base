import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import * as u from './utils'
// import 'antd/dist/antd.css';  // or 'antd/dist/antd.less'  // pc版ANTD
import 'antd-mobile/dist/antd-mobile.css';  // or 'antd-mobile/dist/antd-mobile.less' // 手机antd
import './assets/common.scss'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Routes />, document.getElementById('root'));
registerServiceWorker();
