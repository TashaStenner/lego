import React from "react";
import styles from "./Button.module.scss";
import crushed from "../../assets/audio/Crushed.mp3";

const Button = (props) => {
  const { isPrimary , text } = props;

  let style = isPrimary === true ? styles.primary : styles.secondary;

  return (
    <div  className={style}>
      <p>{text}</p>
    </div>
  );
};

export default Button;
