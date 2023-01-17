import styles from './Button.module.css';

export const Button = ({children, onClick}) => (
    <div className={styles.button} onClick={onClick}>{children}</div>
);