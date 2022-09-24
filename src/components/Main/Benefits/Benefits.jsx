import React from "react";
import styles from "./Benefits.module.scss";

import BenefitItem from "./BenefitItem/BenefitItem";

const Benefits = (props) => {

    let benefitsItems = props.benefits.map( b => <BenefitItem h1={b.h1} p={b.p}/>);

    return (
        <div className={styles.container}>
            {benefitsItems}
        </div>
    )
}

export default Benefits