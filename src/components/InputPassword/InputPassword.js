import { faCopy, faRotate } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./InputPassword.module.css";
import { InputPasswordContext } from '../../context/InputPasswordContext';
import { useContext } from 'react';
import { GeradorSenhaContext } from '../../context/GeradorSenhaContext';

const InputPassword = () => {
    const context = useContext(InputPasswordContext);
    const {gerarSenha} = useContext(GeradorSenhaContext);

    return (
        <div className={styles.containerInputPassword}>
            <input className={styles.inputPassword} placeholder={context.inputPasswordState.placeholder} value={context.inputPasswordState.password} disabled/>
            <div>
                <FontAwesomeIcon icon={faCopy} onClick={() => context.copy(context.inputPasswordState.password)}/>
                <FontAwesomeIcon icon={faRotate} onClick={gerarSenha}/>
            </div>
        </div>
    )
}

export default InputPassword;