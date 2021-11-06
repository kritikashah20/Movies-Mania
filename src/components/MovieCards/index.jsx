import { useState } from "react";

// style
import styles from './MovieCards.module.css';

// component
import MovieCard from './MovieCard';

const MovieCards = ({ moviesList }) => {

    return (
        <>
            {
                moviesList ? (
                    <div className={styles.movieCards}>
                        {moviesList.map((movie, movieIdx) =>
                            <MovieCard key={movieIdx} movie={movie}/>
                        )}
                    </div>
                ) : (
                    <p>No Movies yet</p>
                )
            }
        </>
    )
}

export default MovieCards
