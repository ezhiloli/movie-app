import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore} from 'redux';
import movies from './reducers'
 
// passing the Reducer Here
const store = createStore(movies);
// Store Movie
console.log('Redux Store',store);
console.log('Redux State',store.getState());


 

ReactDOM.render(<App />,document.getElementById('root'));

