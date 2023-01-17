import styles from './Footer.module.css';
import { Text } from '../Text/Text';

export const Footer = () => (
    <footer className={styles.footer}>
        <div className={styles.logo}>Your Logo</div>
        <div className={styles.footer__text}>
            <Text className={styles["footer__text-first"]} size='m'>ООО «СтройТрейд», 123456, г.Москва, ул. Центральная 1, офис 1 ИНН 1234567890 ОГРН 123456789012</Text>
            <div className={styles["footer__text-second"]}>Политика конфиденциальности</div>
        </div>
        <div className={styles.footer__number}>
            <Text className={styles["footer__number-text"]} size='m'>8 800 333 22 33</Text>
            <Text className={styles["footer__number-text"]} size='s'>Звонок по России бесплатный</Text>
        </div>
    </footer>
);