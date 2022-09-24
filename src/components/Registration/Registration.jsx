import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Registration.module.scss";

const Registration = () => {
    return (
        <div className={styles.container}>
            <div className={styles.inner}>
                <form>
                    <input type="email" placeholder="example@gmail.com" />
                    <input type="password" placeholder="choose security password"/>
                    <NavLink to='/main'>
                        <button>Register</button>
                    </NavLink>
                </form>
                <div className={styles.decor}></div>
            </div>
        </div>
    )
}

export default Registration;