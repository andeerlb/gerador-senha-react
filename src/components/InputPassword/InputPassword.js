import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./InputPassword.module.css";
import { InputPasswordContext } from '../../context/InputPasswordContext';
import { useContext } from 'react';

const InputPassword = () => {
    const context = useContext(InputPasswordContext);
    return (
        <div className={styles.containerInputPassword}>
            <input className={styles.inputPassword} placeholder={context.inputPasswordState.placeholder} value={context.inputPasswordState.password} disabled/>
            <FontAwesomeIcon icon={faCopy} />
        </div>
    )
}

export default InputPassword;