import styles from "./GeradorSenha.module.css";
import { faRuler } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CharacterLength = () => {
    return (
        <div className={styles.characterLengthContainer}>
            <div>
                <span>Character Length</span>
                <FontAwesomeIcon icon={faRuler} />
            </div>
            <input type="range" name="rangeInput" min="1" max="10" />
        </div>
    )
}

const GeradorSenha = () => {
    return (
        <div className={styles.containerGerador}>
            <CharacterLength />
        </div>
    )
}

export default GeradorSenha;