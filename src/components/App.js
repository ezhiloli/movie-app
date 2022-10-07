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

  isMovieFavourite = (movie) =>{
    const {favourites} = this.props.store.getState();

    const index = favourites.indexOf(movie);

    if(index !== -1){
        return true;
    }
    return false; 

  }
 
  render(){
    const {list} = this.props.store.getState();
    console.log('RENDER STATE',this.props.store.getState());
    return(
      <div className="App">
        <Navbar />
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>

          </div>
          <div id="list">
                {list.map((movie,index)=>(
                      <MovieCard 
                      movie={movie}
                      key={`movie-${index}`}
                      dispatch={this.props.store.dispatch}
                      isFavourite={this.isMovieFavourite(movie)}
                      />
                ))}
                
          </div>
        </div>
      </div>
    )
  }
}


export default App;
