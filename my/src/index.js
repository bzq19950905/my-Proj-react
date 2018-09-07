import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import registerServiceWorker from './registerServiceWorker';
//汽车筛选
// import Index from './list/index.jsx';
//增删改查
//import Index from './form/index.jsx';
//优化组件
// import Index from './optimizationCom/index.jsx'
//维修表单
// import Index from './maintain/index.jsx';
//路由
// import Index from './RRouter/router/index.jsx';
//登录注册
//import Index from './login/router/index.jsx';
//autd库登录注册
//import Index from './antdForm/router/index.jsx';
//redux-1
//import store from './Redux-1/store/index.jsx';
//import Index from './Redux-1/component/createRedux.jsx'
//跳转-->redux
// import store from './shop/store/index.jsx';
// import Index from './shop/router/index.jsx';
//购物车
//import store from './shopping/store/index.jsx';
//import Index from './shopping/router/index.jsx';
//城市列表
//import store from './city/store/index.jsx';
//import Index from './city/router/index.jsx';
//整合
import store from './zh/store/store.Index.jsx';
import Index from './zh/router/index.jsx';
//redux 搭建练习
//import store from './reduxLX/store/store.Index'
//import Index from './reduxLX/router/index'
//-----没有redux用这个
// ReactDOM.render(<Index />, document.getElementById('root'));
// registerServiceWorker();
//-----有redux用这个

ReactDOM.render(<Provider store={store}><Index /></Provider>, document.getElementById('root'));
registerServiceWorker();