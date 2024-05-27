import OneButton from "./OneButton";
import styles from "./Buttons.module.css"

function Buttons({button}){
  let buttons=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  return <div className={styles.buttonContainer}>
    {buttons.map(button=> <OneButton one={button}></OneButton>)}
  </div>

}
export default Buttons;