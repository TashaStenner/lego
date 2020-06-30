import React, {useEffect} from "react";
import styles from "./Dash.module.scss";
import SearchDash from "../SearchDash";
import WelcomeDash from "../WelcomeDash";

const Dash = (props) => {
  const {result} = props; 

  const showSearch = (result) => {
    return result ? (
      <SearchDash result={result} />
      ) : 
      (
        <WelcomeDash />
      )
  }

  // useEffect(() => {
  // },);

  return (
    <>
    {showSearch(result)}
    </>
  );
};

export default Dash;
