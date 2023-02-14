import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./InputPassword.module.css";

const InputPassword = () => {
    let  textValue = "P4$5W0rD!";
    return (
        <div className={styles.containerInputPassword}>
            <input className={styles.inputPassword} value={textValue} disabled/>
            <FontAwesomeIcon icon={faCopy} />
        </div>
    )
}

export default InputPassword;