import { useState } from 'react';
import './App.css';
import ContainerGeradorSenha from './components/ContainerGeradorSenha/ContainerGeradorSenha';
import { InputPasswordContext } from './context/InputPasswordContext';
import { GeradorSenhaContext } from './context/GeradorSenhaContext';

const CHARACTER_LENGTH_MIN = 10;
const CHARACTER_LENGTH_MAX = 100;

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

function App() {
  const [forcaSenha, setForcaSenha] = useState({
      strength: 0,
      texto: 'FRACO'
  });
  const [geradorSenha, setGeradorSenha] = useState({
      length: CHARACTER_LENGTH_MIN,
      isUppercase: false,
      isLowercase: false,
      hasNumbers: false,
      hasSymbols: false
  });

  const [inputPasswordState, setInputPasswordState] = useState({
    placeholder: "P4$5W0rD!",
    password: ''
  });

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

  const setStrength = (forcaSenha) => {
    setForcaSenha(forcaSenha)
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
    changePassword(password);
  }


  const changePassword = (password) => {
    copy(password);
    setInputPasswordState({
      password: password
    });
  }

  const copy = (text) => {
    navigator.clipboard.writeText(text);
  }

  return (
    <div className="App noselect">
      <GeradorSenhaContext.Provider value={{
            geradorSenha,
            forcaSenha,
            setLength,
            setUppercase,
            setLowercase,
            setHasNumbers,
            setHasSymbols,
            setStrength,
            gerarSenha
        }}>
        <InputPasswordContext.Provider value={{
          inputPasswordState,
          changePassword,
          copy
        }}>
          <ContainerGeradorSenha />
        </InputPasswordContext.Provider>
      </GeradorSenhaContext.Provider>
    </div>
  );
}

export default App;
