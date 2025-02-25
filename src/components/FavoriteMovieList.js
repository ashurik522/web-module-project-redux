import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {  removeFavorite  } from '../actions/favoritesActions';


const FavoriteMovieList = (props) => {
    const favorites = [];
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={()=> props.removeFavorite(movie)} >
                            <span className="material-icons">remove_circle</span>
                        </span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = state => {
    console.log(state)
    return({
        movies: state.items.movies,
        favorites: state.favorites.favorites
    })
}

export default connect(mapStateToProps,{ removeFavorite})(FavoriteMovieList);