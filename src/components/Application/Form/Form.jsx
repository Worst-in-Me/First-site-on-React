import styles from './Form.module.css';
import { Text } from '../../Text/Text';

export const Form = () => (
    <div className={styles.application__form}>
        <Text className={styles['application__form-title']} size='l'>Оставьте заявку на сайте</Text>
        <form action="" className={styles.form1}>
            <div className={styles.form1__name}>
                <div className={styles["form1__name-title"]}>Введите имя</div>
                <input type="text" name="Введите имя" placeholder="Введите имя" />
            </div>
            <div className={styles.form1__number}>
                <div className={styles["form1__number-title"]}>Введите номер телефона</div>
                <Text className={styles['form1__number-subtitle']} size='s'>Наш менеджер Вам перезвонит</Text>
                <input type="text" name="Введите номер телефона" placeholder="xxx-xxx-xxx" />
            </div>
            <div className={styles.form1__button}>
                <input type="submit" className={styles["form1__button-but"]} />
             </div>
        </form>
        <Text className={styles['application__form-text']} size='s'>Нажимая на кнопку, Вы принимаете Положение и Согласие на обработку персональных данных.</Text>
    </div>
);