import React from "react";
import styles from "./StickerText.module.scss";

const StickerText = (props) => {
  const { text, isPrimary } = props;
  let style = isPrimary === true ? styles.primary : styles.secondary;
  return (
    <>
      <div className={style}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default StickerText;
