
import styles from './App.module.css'
import Buttons from './components/Buttons'

function App() {
  return <div className={styles.outerContainer}>
      <input className={styles.container} type='text'></input>
    <Buttons></Buttons>
  </div>
}

export default App
