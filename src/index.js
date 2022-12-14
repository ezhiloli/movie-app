import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {createStore,applyMiddleware} from 'redux';
import rootReducer  from './reducers'
import thunk from 'redux-thunk'
 

// const logger = function({dispatch,getState}){

//     return function(next){
//         return function(action){
//             console.log('ACTION_TYPE',action.type);
//             next(action);
//         }
//     }

// }

const logger =  ({dispatch,getState}) => (next) => (action) =>{
    // if(typeof action !== "function"){
    console.log('ACTION_TYPE',action);
    // }
    next(action);
}

// const thunk =  ({dispatch,getState}) => (next) => (action) =>{
//    if(typeof action === 'function'){
//         action(dispatch);
//    }
//     next(action);
// }

// passing the Reducer Here
const store = createStore(rootReducer,applyMiddleware(logger,thunk));
// Store Movie
console.log('Redux Store',store);
// console.log('Redux State',store.getState());


export const StoreContext = createContext();

console.log('StoreContext',StoreContext);


// store.dispatch({
//     type:'ADD_MOVIES',
//     movies:[{name:'Superman'}]
// })
 
// console.log('After State',store.getState());
class Provider extends React.Component{
    render(){
        const {store} = this.props
        return <StoreContext.Provider value={store}>
          {this.props.children}  
</StoreContext.Provider>
    }
}

// const connectedAppComponent = connect(callback)(App);
export function connect(callback){
    return function(Component){
        class ConnectedComponent extends React.Component{
            constructor(props){
                super(props);
                this.unsubscribe = this.props.store.subscribe(() => this.forceUpdate());
            }
            componentWillUnmount(){
                this.unsubscribe(); 
            }
            render(){
                const {store} = this.props;
                const state = store.getState();
                const datatoBePassedAdPops = callback(state);
                return( 
                    <Component {...datatoBePassedAdPops} dispatch={store.dispatch} />
                        
                  );
            
            }
        };
        class ConnectedComponentWrapper extends React.Component{
            render(){
                return(
                <StoreContext.Consumer>
                    {store => <ConnectedComponent store={store}/>}
                </StoreContext.Consumer>
                );
            }
        }
        return ConnectedComponentWrapper;

    }
}


ReactDOM.render(
    <Provider store={store}>
        <App  />
        {/* Within the Provider tag all the elements will be childeren */}
    </Provider>,
    document.getElementById('root')
);

