import { useState } from 'react';
import './App.css';
import ContainerGeradorSenha from './components/ContainerGeradorSenha/ContainerGeradorSenha';
import { InputPasswordContext } from './context/InputPasswordContext';

function App() {
  const [iscopied, setIscopied] = useState(false);
  const [inputPasswordState, setInputPasswordState] = useState({
    placeholder: "P4$5W0rD!",
    password: ''
  });

  const changePassword = (password) => {
    copy(password);
    setInputPasswordState({
      password: password
    });
  }

  const copy = (text) => {
    navigator.clipboard.writeText(text);
    setIscopied(true);
  }

  console.log(iscopied);

  return (
    <div className="App noselect">
      <InputPasswordContext.Provider value={{
        inputPasswordState,
        changePassword,
        copy,
        iscopied
      }}>
        <ContainerGeradorSenha />
      </InputPasswordContext.Provider>
    </div>
  );
}

export default App;
