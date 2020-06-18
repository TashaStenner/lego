import React from "react";
import styles from "./Card.module.scss";
import StickerText from "../StickerText";

const Card = (props) => {
  const { setNum, setName, year, parts, imgUrl } = props;
  return (
    <>
      <section>
        <div className={styles.cardInfo}>
          <div className={styles.setNumber}>
            <StickerText isPrimary={true} text={setNum} />
          </div>
          <div className={styles.setName}>
            <StickerText isPrimary={false} text={setName} />
          </div>
        </div>
        <img src={imgUrl} alt={setName} />
        <div className={styles.extraInfo}>
          <div className={styles.year}>
            <p>Year: {year}</p>
          </div>
          <div className={styles.parts}>
            <p>Parts: {parts}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
