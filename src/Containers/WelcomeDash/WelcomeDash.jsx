import React from "react";
import styles from "./WelcomeDash.module.scss";
import InformationBox from "../../Components/InformationBox";

const WelcomeDash = () => {
  return (
    <section className={styles.welcome}>
      <div className={styles.infomationBox}>
      <InformationBox />
      </div>
      <div className={styles.minifigs}></div>
    </section>
  );
};

export default WelcomeDash;
