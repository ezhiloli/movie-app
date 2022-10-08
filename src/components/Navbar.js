import React from "react";
import {addMovieToList, handleMovieSearch } from "../actions";


class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showSearchResults:true,
            searchText:''
        };
    }
    
    handleAddToMovies = (movie) => {
        this.props.dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults:false
        })
    }

    handleChange = (e) => {
    
        this.setState(
          {
            searchText: e.target.value,
          });
         
        
      }
      handleSearch = () => {
       
          const { searchText } = this.state;
          this.props.dispatch(handleMovieSearch(searchText));
          return;
      };
    render(){
        // const { showSearchResults} = this.state;
        const { result,showSearchResults } = this.props.search;
        console.log('API Result is',result);
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>


                    {
                        showSearchResults &&
                        <div className="search-results">
                            <div className="search-result">
                                <img src={result.Poster} alt="Search-Image"/>

                                <div className="movie-info">
                                    <span>{result.Title}</span>
                                    <button onClick={()=>this.handleAddToMovies(result)}>Add to Movies</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

export default Navbar;

