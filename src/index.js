import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios'   //global

axios.interceptors.request.use(requesicao => {
    console.log(requesicao);
    // Edit request config
    return requesicao
 }, erro => {
     console.log(erro)
     return Promise.reject(erro)
 })

 axios.interceptors.response.use(resposta => {
    console.log(resposta)
    //Edit request config
    return resposta
 }, erro => {
    console.log(erro)
    return Promise.reject(erro)
 })


ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
