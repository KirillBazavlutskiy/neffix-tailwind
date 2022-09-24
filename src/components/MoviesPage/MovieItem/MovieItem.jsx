import React from "react";
import styles from "./MovieItem.module.scss";
import movie from "./images/bb.jpg"
import { NavLink } from "react-router-dom";

const MovieItem = props => {

    let path = '/movies/' + props.id;

    return (
        <div className={styles.item}>
            <img src={movie} alt="movie" />
            <div className={styles.text}>
                <h1>{props.name + props.id}</h1>
                <p>{props.description}</p>
                <NavLink to={path}>
                    <button>Watch!</button>
                </NavLink>
            </div>

        </div>
    )
}

export default MovieItem;