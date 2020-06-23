import React , {useState} from "react";
import styles from "./SearchDash.module.scss";
import Card from "../../Components/Card";

const SearchDash = (props) => {
  const { handleClick } = props;

  const [number, setNumber] = useState();
  const [name, setName] = useState();
  const [year, setYear] = useState();
  const [parts, setParts] = useState();
  const [setImg, setSetImg] = useState();

  const getSets = () => {
    fetch(
      "https://rebrickable.com/api/v3/lego/sets/7633-1?key=b3467dbaf7b933bcef61dd2d62d6dc64"
    )
      .then((result) => result.json())
      .then((result) => (
      setNumber(result.set_num),
      setName(result.name),
      setYear(result.year), 
      setParts(result.num_parts),
      setSetImg(result.set_img_url)
      )   
      )
      .catch((err) => console.log(err));
  };


  return (
    <>
      <Card setNum={number} setName={name} year={year} parts={parts} imgUrl={setImg}/>
    </>
  );
};

export default SearchDash;
