import '@babel/polyfill';
import React from 'react';
import './index.scss';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
//store
// import { createStore } from "redux";
// import myReducer from "./reducers/index";
import { Provider } from "react-redux";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/scss/reset.scss";
import "./assets/scss/components.scss";
// import { HashRouter } from 'react-router-dom';
// import configureStore from './store/configureStore';
import { getLocalStorage } from './utils/localStorage';

// const store = createStore(myReducer);
// const persisted = getLocalStorage();

ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
      <App />
  </Provider>,   
  // </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

// const Main = () => (
//   <Provider store={configureStore(persisted)}>
//     <HashRouter basename="/">
//       <App />
//     </HashRouter>
//   </Provider>
// );

// ReactDOM.render(
//     <Main />, 
//   document.getElementById('root'));