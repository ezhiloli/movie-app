import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import rootReducer  from './reducers'
 

const logger = function({dispatch,getState}){

    return function(next){
        return function(action){
            console.log('ACTION_TYPE',action.type);
            next(action);
        }
    }

}

// passing the Reducer Here
const store = createStore(rootReducer,applyMiddleware(logger));
// Store Movie
console.log('Redux Store',store);
// console.log('Redux State',store.getState());


// store.dispatch({
//     type:'ADD_MOVIES',
//     movies:[{name:'Superman'}]
// })
 
// console.log('After State',store.getState());

ReactDOM.render(<App store={store}/>,document.getElementById('root'));

