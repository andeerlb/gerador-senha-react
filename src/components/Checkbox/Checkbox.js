import styles from "./Checkbox.module.css";

const Checkbox = ({ id=new Date().getTime(), label="Descricao checkbox", onChange = (isChecked) => {} }) => {
    return (
        <div className={styles.containerCheckbox}>
            <input id={id} type="checkbox" onChange={e => onChange(e.target.checked)}/>
            <label htmlFor={id}>{label}</label>
        </div>
    )
}

export default Checkbox;