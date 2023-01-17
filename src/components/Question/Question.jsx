import styles from './Question.module.css';
import { Text } from '../Text/Text';
import { Button } from '../Button/Button';

export const Question = () => (
    <div className={styles.question}>
        <div class={styles.form_question__wrap}>
            <Text className={styles.form_question__title} size='xl'>Остались вопросы? Оставьте заявку на сайте</Text>
            <form action="" className={styles.form2}>
                <div className={styles.form2__name}>
                    <input type="text" name="Введите имя" placeholder="Введите имя" />
                </div>
                <div className={styles.form2__mail}>
                    <input type="text" name="mail" placeholder="mail@mail.ru" />
                </div>
                <div className={styles.form2__number}>
                    <input type="text" name="number" placeholder="xxx-xxx-xxx" />
                </div>
                <div className={styles.form2__button}>
                    <Button>Отправить</Button>
                </div>
            </form>
            <Text className={styles.form_question__text} size='s'>Нажимая на кнопку, Вы принимаете Положение и Согласие на обработку персональных данных.</Text>
        </div>       
    </div>
);