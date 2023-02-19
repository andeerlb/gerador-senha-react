import styles from "./GeradorSenha.module.css";
import { faRuler } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Checkbox from "../Checkbox/Checkbox";

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

const ForcaDaSenha = () => {
    return (
        <div className={styles.containerStrength}>
            <h5>STRENGTH</h5>
            <div>
                <div className={[styles.strength, styles.strengthChecked].join(' ')}></div>
                <div className={[styles.strength].join(' ')}></div>
                <div className={[styles.strength].join(' ')}></div>
                <div className={[styles.strength].join(' ')}></div>
            </div>
        </div>
    )
}

const GeradorSenha = () => {
    return (
        <div className={styles.containerGerador}>
            <div className="m-b-10">
                <CharacterLength />
            </div>
            <div className="m-b-15">
                <Checkbox id="uppercase" label="Include Uppercase Letters"/>
            </div>
            <div className="m-b-15">
                <Checkbox id="lowercase" label="Include Lowercase Letters"/>
            </div>
            <div className="m-b-15">
                <Checkbox id="numbers" label="Include Numbers"/>
            </div>
            <div className="m-b-15">
                <Checkbox id="symbols" label="Include Symbols"/>
            </div>
            <div className="m-t-15">
                <ForcaDaSenha />
            </div>
        </div>
    )
}

export default GeradorSenha;