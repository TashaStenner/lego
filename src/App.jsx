import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Navbar from './Components/Navbar';

function App() {

const getSets = () => {
  fetch('https://rebrickable.com/api/v3/lego/sets/7633-1?key=b3467dbaf7b933bcef61dd2d62d6dc64') 
  .then(result => result.json())
  .then(result => 
  console.log(result))
  .catch(err => console.log(err))
}

getSets()

  return (
    <div className={styles.background}>
      <Navbar/>
    </div>
  );
}

export default App;
