import styles from "./Display.module.css"

function Display({displayVal}){
  return <input className={styles.container} type='text' value={displayVal} readOnly></input>

}

export default Display;