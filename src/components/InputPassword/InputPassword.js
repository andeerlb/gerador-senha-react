import { faCopy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./InputPassword.module.css";
import { InputPasswordContext } from '../../context/InputPasswordContext';
import { useContext } from 'react';
import { Tooltip } from "react-tooltip";

const InputPassword = () => {
    const context = useContext(InputPasswordContext);
    const { iscopied } = useContext(InputPasswordContext);

    return (
        <>
            <div className={styles.containerInputPassword}>
                <input className={styles.inputPassword} placeholder={context.inputPasswordState.placeholder} value={context.inputPasswordState.password} disabled />
                <FontAwesomeIcon
                    icon={faCopy}
                    onClick={() => context.copy(context.inputPasswordState.password)}
                    data-tooltip-id='copied'
                />
                {iscopied && (
                    <Tooltip
                        id="copied"
                        content="copiado"
                        place='top'
                        events={['click']}

                    />
                )}
            </div>
        </>
    )
}

export default InputPassword;
