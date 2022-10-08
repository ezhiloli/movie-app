import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import { data } from '../data'
import {addMovies, setShowFavourites} from '../actions'
import {StoreContext} from '../index'
// import { search } from '../reducers';


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
    const {movies} = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);

    if(index !== -1){
        return true;
    }
    return false; 

  }
  onChangeTab = (value) =>{
    this.props.store.dispatch(setShowFavourites(value))
  }
 
  render(){
    const {movies,search} = this.props.store.getState();
    const {list,favourites,showFavourites} = movies;
    console.log('RENDER STATE',this.props.store.getState());
    const displayMovies = showFavourites ? favourites :list;

    return (
      <StoreContext.Consumer>
        {(store) =>{
return( 
  <div className="App">
    <Navbar dispatch={this.props.store.dispatch} search={search}/>
    <div className="main">
      <div className="tabs">
        <div className={`tab ${showFavourites ? '' : 'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
        <div className={`tab ${showFavourites ? 'active-tabs' : ''}`}  onClick={()=>this.onChangeTab(true)}>Favourites</div>

      </div>
      <div id="list">
            {displayMovies.map((movie,index)=>(
                  <MovieCard 
                  movie={movie}
                  key={`movie-${index}`}
                  dispatch={this.props.store.dispatch}
                  isFavourite={this.isMovieFavourite(movie)}
                  />
            ))}    
      </div>
      {displayMovies.length === 0 ? <div className='no-movie'>No Movies to Show</div> :null}
    </div>
  </div>
)

        }}
      </StoreContext.Consumer>
    )    
  }
}


export default App;

