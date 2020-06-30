import React, { useState } from "react";
import styles from "./SearchDash.module.scss";
import Card from "../../Components/Card";

const SearchDash = (props) => {
  const { result } = props; 
    
  return (
    <>
      <Card
        setNum={result.set_num}
        setName={result.name}
        year={result.year}
        parts={result.num_parts}
        imgUrl={result.set_img_url}
      />
    </>
  );
};

export default SearchDash;
