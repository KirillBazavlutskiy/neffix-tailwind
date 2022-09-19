import React from "react";
import styles from "./Benefits.module.scss";

import BenefitItem from "./BenefitItem/BenefitItem";

const Benefits = () => {

    let benefits = [
        {h1: "Watch movies from any devices", p: "Our system allows you to start watching movies on one device and easily switch to another."},
        {h1: "Awesome picture quality", p: "Awesome quality in any system anytime."},
        {h1: "Best stories", p: "excellent films with the best actresses in the world."}
    ]

    let benefitsItems = benefits.map( b => <BenefitItem h1={b.h1} p={b.p}/>);

    return (
        <div className={styles.container}>
            {benefitsItems}
        </div>
    )
}

export default Benefits