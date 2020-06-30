import React, {useState} from "react";
import styles from "./Navbar.module.scss";
import Logo from "../../assets/images/logo.png";
import Button from "../Button";

const Navbar = (props) => {
  const {handleClick} = props;

  const [searchData, setSearchData] = useState("6869");

  return (
    <header>
      <div className={styles.title}>
        <img src={Logo} alt="logo" />
        <h1>search for sets</h1>
      </div>
      <div className={styles.searchSection}>
        <div className={styles.brick}>
          <input className={styles.input} type="text" placeholder="Search" onSubmit={(e) => setSearchData(e.target.value)}/>
        </div>
        <div className={styles.button}>
          <Button isPrimary={true} text={"Let's Go!"} onClick={() => handleClick(searchData)}/>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
