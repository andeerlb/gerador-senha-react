import styles from "./Button.module.css";

const Button = ({ text= "Texto botão"}) => {
    return (
        <>
            <button className={styles.button}>
                {text}
            </button>
        </>
    )
}

export default Button;