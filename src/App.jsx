import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Navbar from './Components/Navbar';
import SearchDash from './Containers/SearchDash';

function App() {



  return (
    <div className={styles.background}>
      <Navbar/>
      <SearchDash />
    </div>
  );
}

export default App;
