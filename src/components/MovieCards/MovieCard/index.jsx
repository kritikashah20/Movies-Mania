import styles from "../MovieCards.module.css";

const MovieCard = ({ movie }) => {
    return (
        <div className={styles.movie_card}>
        <h2 style={{color: 'black'}}>{movie.Title}</h2>
        <p style={{color: 'black'}}>{movie.Year}</p>
        <img src={movie.Poster} alt="Movie Poster" />
        </div>
    )
}

export default MovieCard
