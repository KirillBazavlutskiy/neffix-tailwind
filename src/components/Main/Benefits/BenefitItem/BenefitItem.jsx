import React from "react";
import styles from "./BenefitItem.module.scss";
import tv from "./tv.png"

const BenefitItem = props => {
    return (
        <div className={styles.container}>
            <img src={tv} alt="img" />
            <div className={styles.text}>
                <h1>{props.h1}</h1>
                <p>{props.p}</p>
            </div>
        </div>
    )
}

export default BenefitItem;