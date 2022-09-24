import React from "react";
import styles from "./MoviesPage.module.scss";

import MovieItem from "./MovieItem/MovieItem";

const MoviesPage = props => {

    let movieItems = props.movies.map( m => <MovieItem id={m.id} name={m.name} description={m.description} />);

    return (
        <div className={styles.container}>
            {movieItems}
        </div>
    )
}

export default MoviesPage;