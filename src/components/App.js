import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data'
import {addMovies} from '../actions'


class App extends React.Component{

  // To get the movies we make API Calls now we are fetch from data.js file
  // dispatch action
  componentDidMount(){

    const {store} = this.props;

    // when ever we dispatch action the subscription will be called
    store.subscribe(()=>{
      console.log('Updated');
      this.forceUpdate();
    })
 
    // store.dispatch({
    //   type:'ADD_MOVIES',
    //   movies:data
    // }); Alternate method -> Call some function(data) if the function return this lines

    store.dispatch(addMovies(data));

    console.log('After making Local API Call from componentDidMount',this.props.store.getState());

  }
 
  render(){
    const movies = this.props.store.getState();
    return(
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>

          </div>
          <div id="list">
                {movies.map((movie,index)=>(
                      <MovieCard 
                      movie={movie}
                      key={`movie-${index}`}
                      />
                ))}
                
          </div>
        </div>
      </div>
    )
  }
}


export default App;
