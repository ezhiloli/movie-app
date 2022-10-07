// {
//     type:'INCREASE_COUNT',
// }
// {
//     type:'DECREASE_COUNT'
// }

import { data } from "../data";

// this variables are action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITE = 'ADD_TO_FAVOURITE';
export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES = 'SET_SHOW_FAVOURITES';
// this functions are action creators
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies
    }
}
export function addToFavourites(movie){
    return{
        type:ADD_TO_FAVOURITE,
        movie,
    }
}

export function removeFromFavourites(movie){
    return{
        type:REMOVE_FROM_FAVOURITES,
        movie
    }
}
export function setShowFavourites(value){
    return{
        type:SET_SHOW_FAVOURITES,
        value
    }
}
export function handleMovieSearch(movie) {
    console.log('In handleMovieSearch Function',movie);
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=205c172a&s=${movie}`;
   
      fetch(url)
        .then(response => response.json())
        .then(movie => {
          console.log("movie", movie);
        })
        
    }
  