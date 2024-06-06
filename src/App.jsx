import styles from './App.module.css'
import Buttons from './components/Buttons'
import Display from './components/Display'
import { useState } from 'react'

function App() {

  const [calVal,setcalVal]=useState("");
  const onbuttonClick = (buttonText) => {
    if(buttonText === 'C'){
      setcalVal("");
    } 
    else if(buttonText === '='){
      const result = eval(calVal);
      setcalVal(result);
    }
    else{
      const newVal = calVal + buttonText;
      setcalVal(newVal);
    }
  };

  return <div className={styles.outerContainer}>
    <Display displayVal={calVal}></Display>
    <Buttons onbuttonClick={onbuttonClick}></Buttons>
  </div>
}

export default App
