import React  from "react";

class MovieCard extends React.Component{
    render(){
        const {movie} = this.props;
        // To check weather the moviecard component has been working or not
        // console.log('Movie ins MovieCard Component=>',movie);
        return(
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="Poster" />
                </div>
                <div className="right">
                    <div className="title">
                        {movie.Title}
                    </div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        <button>Favourite</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;