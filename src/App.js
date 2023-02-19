import { useState } from 'react';
import './App.css';
import ContainerGeradorSenha from './components/ContainerGeradorSenha/ContainerGeradorSenha';
import { InputPasswordContext } from './context/InputPasswordContext';

function App() {
  const [inputPasswordState, setInputPasswordState] = useState({
    placeholder: "P4$5W0rD!",
    password: ''
  });

  const changePassword = (password) => {
    setInputPasswordState({
      password: password
    })
  }

  return (
    <div className="App noselect">
      <InputPasswordContext.Provider value={{
        inputPasswordState,
        changePassword
      }}>
        <ContainerGeradorSenha />
      </InputPasswordContext.Provider>
    </div>
  );
}

export default App;
