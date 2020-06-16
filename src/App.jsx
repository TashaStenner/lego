import React from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className={styles.background}>
      <Navbar/>
    </div>
  );
}

export default App;
