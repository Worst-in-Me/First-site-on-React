import styles from './Modal.module.css';
import { createPortal } from 'react-dom';
import { Text } from '../Text/Text';

export const Modal = ({onClose}) => {
    return createPortal(
        <div id="modal">
            <div className={styles['popup-form-wrapper']}>  
                <div className={styles["popup-form"]}>
                    <div className={styles["flex-button"]}>
                        <div className={styles["button-close"]} onClick={onClose}>
                            <div className={styles["button-close__line"]}></div>
                            <div className={styles["button-close__line"]}></div>
                        </div>
                    </div>
                    <Text className={styles["popup-form__title" ]}size='l'>Оставить заявку</Text>
                    <form action="" className={styles.form3}>
                        <div className={styles.form3__name}>
                            <input type="text" name="name" placeholder="Введите имя" className={styles.form3__input} />
                        </div>
                        <div className={styles.form3__mail}>
                            <input type="text" name="mail" placeholder="mail@mail.ru" className={styles.form3__input} />
                        </div>
                        <div className={styles.form3__number}>
                            <input type="text" name="number" placeholder="xxx-xxx-xxx" className={styles.form3__input} />
                        </div>
                        <div className={styles.form3__button}>
                            <input type="submit" className={styles.form3__input} />
                        </div>
                    </form>
                    <Text className={styles.popup_form__text} size='s'>Нажимая на кнопку, Вы принимаете Положение и Согласие на обработку персональных данных.</Text>
                </div>
            </div>
        </div>
    ,document.body);
};