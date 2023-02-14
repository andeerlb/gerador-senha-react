import GeradorSenha from "../GeradorSenha/GeradorSenha";
import InputPassword from "../InputPassword/InputPassword";
import styles from "./ContainerGeradorSenha.module.css";

const ContainerGeradorSenha = () => {
    return (
        <div id={styles.container}>
            <InputPassword />
            <GeradorSenha />
        </div>
    )
}

export default ContainerGeradorSenha;