import React, {useState} from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Navbar from './Components/Navbar';
import Dash from './Containers/Dash';

function App() {

const [timer, setTimer] = useState(null);
const [resultData, setResultData] = useState();

const getSets = (set) => {
    fetch(
      `https://rebrickable.com/api/v3/lego/sets/${set}-1?key=b3467dbaf7b933bcef61dd2d62d6dc64`
    )
      .then((result) => result.json())
      .then(
        (result) => (
          console.log("works"),
          setResultData(result),
          console.log(resultData)
        )
      )
      .catch((err) => console.log(err));
  };

  const handleChange = (value) => {
    clearTimeout(timer);
    setTimer(setTimeout(() => getSets(value), 1000));
  };

  return (
    <div className={styles.background}>
      <Navbar handleClick={handleChange}/>
      <Dash result={resultData}/>
    </div>
  );
}

export default App;
