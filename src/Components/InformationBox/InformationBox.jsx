import React from "react";
import styles from "./InformationBox.module.scss";

const InformationBox = () => {
  return (
    <>
      <section className={styles.info}>
        <div className={styles.data}>
          <p></p>
          <p className={styles.referenceLink}><a href="https://kidskonnect.com/fun/lego/">LEGO Facts & Worksheets: https://kidskonnect.com</a> - KidsKonnect, December 15, 2016</p>
        </div>
      </section>
    </>
  );
};

export default InformationBox;
