import styles from "./GeradorSenha.module.css";
import Checkbox from "../Checkbox/Checkbox";
import { useContext, useEffect } from "react";
import { InputPasswordContext } from "../../context/InputPasswordContext";
import { GeradorSenhaContext } from "../../context/GeradorSenhaContext";

const CHARACTER_LENGTH_MIN = 10;
const CHARACTER_LENGTH_MAX = 100;

const CharacterLength = () => {
    const geradorSenhaContext = useContext(GeradorSenhaContext);

    const handleRangeValue = (e) =>{
        geradorSenhaContext.setLength(e.target.value);
    }
    
    return (
        <div className={styles.characterLengthContainer}>
            <div>
                <span>Character Length</span>
                <span className={styles['range-value']}> <p>{geradorSenhaContext.geradorSenha.length}</p> </span>
            </div>
            <input type="range" name="rangeInput" value={geradorSenhaContext.geradorSenha.length}  min={CHARACTER_LENGTH_MIN} max={CHARACTER_LENGTH_MAX} onChange={handleRangeValue} />
        </div>
    )
}

const ForcaDaSenha = () => {
    const geradorSenhacontext = useContext(GeradorSenhaContext);

    return (
        <div className={styles.containerStrength}>
            <h5>STRENGTH</h5>
            <div>
                <span>{geradorSenhacontext.forcaSenha.texto}</span>
                <div className={[styles.strength, styles.weak].join(' ')}></div>
                <div className={[styles.strength, geradorSenhacontext.forcaSenha.strength >= 2 && styles.weak].join(' ')}></div>
                <div className={[styles.strength, geradorSenhacontext.forcaSenha.strength >= 3 && styles.medium].join(' ')}></div>
                <div className={[styles.strength, geradorSenhacontext.forcaSenha.strength === 4 && styles.strong].join(' ')}></div>
            </div>
        </div>
    )
}

const GeradorSenha = () => {
    const {gerarSenha, setLowercase, setHasNumbers, setHasSymbols, setUppercase, geradorSenha} = useContext(GeradorSenhaContext);

    useEffect(() => {
        gerarSenha();
    }, [geradorSenha])

    return (
        <div className={styles.containerGerador}>
            <div className="m-b-10">
                <CharacterLength />
            </div>
            <div className="m-b-15">
                <Checkbox id="uppercase" label="Include Uppercase Letters" onChange={isChecked => setUppercase(isChecked)}/>
            </div>
            <div className="m-b-15">
                <Checkbox id="lowercase" label="Include Lowercase Letters" onChange={setLowercase}/>
            </div>
            <div className="m-b-15">
                <Checkbox id="numbers" label="Include Numbers" onChange={setHasNumbers}/>
            </div>
            <div className="m-b-15">
                <Checkbox id="symbols" label="Include Symbols" onChange={setHasSymbols}/>
            </div>
            <div className="m-t-15 m-b-15">
                <ForcaDaSenha />
            </div>
        </div>
    )
}

export default GeradorSenha;