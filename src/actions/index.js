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

// this functions are action creators
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies:data
    }
}
export function addToFavourites(movie){
    return{
        type:ADD_TO_FAVOURITE,
        movie
    }
}