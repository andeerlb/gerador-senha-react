import styles from "./Button.module.css";

const Button = ({ text= "Texto botão", onClick = () => {}}) => {
    return (
        <>
            <button className={styles.button} onClick={onClick}>
                {text}
            </button>
        </>
    )
}

export default Button;