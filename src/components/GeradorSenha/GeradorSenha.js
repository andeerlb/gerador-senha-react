import styles from "./GeradorSenha.module.css";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import { useContext, useState } from "react";
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
                <span>{geradorSenhacontext.geradorSenha.forcaSenha.texto}</span>
                <div className={[styles.strength, styles.weak].join(' ')}></div>
                <div className={[styles.strength, geradorSenhacontext.geradorSenha.forcaSenha.strength >= 2 && styles.weak].join(' ')}></div>
                <div className={[styles.strength, geradorSenhacontext.geradorSenha.forcaSenha.strength >= 3 && styles.medium].join(' ')}></div>
                <div className={[styles.strength, geradorSenhacontext.geradorSenha.forcaSenha.strength === 4 && styles.strong].join(' ')}></div>
            </div>
        </div>
    )
}

const gerarListaDeChars = (geradorSenha) => {
    const CHARS_NUMERICOS = "0123456789";
    const CHARS_MINUSCULO = "abcdefghijklmnopqrstuvwxyz";
    const CHARS_MAIUSCULO = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const CHARS_SIMBOLOS = "!@#$%^&*()";

    let chars = "";
    if(geradorSenha.hasNumbers) {
        chars += CHARS_NUMERICOS;
    }

    if(geradorSenha.hasSymbols) {
        chars += CHARS_SIMBOLOS;
    }

    if(geradorSenha.isLowercase) {
        chars += CHARS_MINUSCULO;
    }

    if(geradorSenha.isUppercase) {
        chars += CHARS_MAIUSCULO;
    }

    if(!chars.length) {
        return CHARS_MINUSCULO;
    }

    return chars;
}

const regraParaVerificarAForcaDaSenha = (geradorSenha) => {
    let forcaSenha =  {
        strength: 0,
        texto: 'FRACO'
    };

    if(geradorSenha.isUppercase){
        forcaSenha.strength += 1;
    }

    if(geradorSenha.isLowercase){
        forcaSenha.strength += 1;
    }

    if(geradorSenha.hasNumbers){
        forcaSenha.strength += 1;
    }

    if(geradorSenha.hasSymbols){
        forcaSenha.strength += 1;
    }

    if(geradorSenha.length < 20) {
        forcaSenha.strength = 1;
    }

    if(forcaSenha.strength <= 1) {
        forcaSenha.texto = 'FRACO';
    }

    if(forcaSenha.strength === 2) {
        forcaSenha.texto = 'FRACO';
    }

    if(forcaSenha.strength === 3) {
        forcaSenha.texto = 'MÉDIO';
    }

    if(forcaSenha.strength >= 4) {
        forcaSenha.texto = 'FORTE';
    }

    return forcaSenha;
}

const GeradorSenha = () => {
    const inputPasswordContext = useContext(InputPasswordContext);
    const [geradorSenha, setGeradorSenha] = useState({
        forcaSenha: {
            strength: 0,
            texto: 'FRACO'
        },
        length: CHARACTER_LENGTH_MIN,
        isUppercase: false,
        isLowercase: false,
        hasNumbers: false,
        hasSymbols: false
    });

    const setStrength = (forcaSenha) => {
        setGeradorSenha({
            ...geradorSenha,
            forcaSenha: forcaSenha
        })
    }

    const setLength = (length = CHARACTER_LENGTH_MAX) => {
        setGeradorSenha({
            ...geradorSenha,
            length
        })
    }

    const setUppercase = (uppercase = false) => {
        setGeradorSenha({
            ...geradorSenha,
            isUppercase: uppercase
        })
    }

    const setLowercase = (lowercase = false) => {
        setGeradorSenha({
            ...geradorSenha,
            isLowercase: lowercase
        })
    }

    const setHasNumbers = (hasNumbers = false) => {
        setGeradorSenha({
            ...geradorSenha,
            hasNumbers
        })
    }

    const setHasSymbols = (hasSymbols = false) => {
        setGeradorSenha({
            ...geradorSenha,
            hasSymbols
        })
    }

    const gerarSenha = () => {
        const CHARS = gerarListaDeChars(geradorSenha);
        let password = "";
        for (var index = 0; index <= geradorSenha.length-1; index++) {
            const numeroAleatorio = Math.floor(Math.random() * CHARS.length);
            password += CHARS.substring(numeroAleatorio, numeroAleatorio+1);
        }
        
        let forcaSenha = regraParaVerificarAForcaDaSenha(geradorSenha);
        setStrength(forcaSenha);
        inputPasswordContext.changePassword(password);
    }

    return (
        <GeradorSenhaContext.Provider value={{
            geradorSenha,
            setLength,
            setUppercase,
            setLowercase,
            setHasNumbers,
            setHasSymbols
        }}>
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
                <div className="m-b-15">
                    <Button  text="Generate" onClick={gerarSenha}/>
                </div>
            </div>
        </GeradorSenhaContext.Provider>
    )
}

export default GeradorSenha;