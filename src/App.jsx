import React, {useState} from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Navbar from './Components/Navbar';
import SearchDash from './Containers/SearchDash';

function App() {

const [click, setClick] = useState()

  return (
    <div className={styles.background}>
      <Navbar handleClick={click}/>
      <SearchDash handleClick={setClick()}/>
    </div>
  );
}

export default App;
