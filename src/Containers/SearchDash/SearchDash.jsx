import React from "react";
import styles from "./SearchDash.module.scss";
import Card from "../../Components/Card";

const SearchDash = (props) => {
  const { handleClick } = props;

  const getSets = () => {
    fetch(
      "https://rebrickable.com/api/v3/lego/sets/7633-1?key=b3467dbaf7b933bcef61dd2d62d6dc64"
    )
      .then((result) => result.json())
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Card setNum={"7893"} setName={"name"} year={"1998"} parts={"238908"} imgUrl={"https://cdn.rebrickable.com/media/sets/7633-1/6688.jpg"}/>
    </>
  );
};

export default SearchDash;
