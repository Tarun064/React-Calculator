import styles from "./OneButton.module.css"

const OneButton=({one})=>{
  return <button className={styles.button}>{one}</button>
}
export default OneButton;