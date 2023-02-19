import styles from "./Checkbox.module.css";

const Checkbox = ({ id=new Date().getTime(), label="Descricao checkbox" }) => {
    return (
        <div className={styles.containerCheckbox}>
            <input id={id} type="checkbox" />
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox;