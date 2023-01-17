import styles from './Application.module.css';
import { Form } from './Form/Form';
import { Text } from '.././Text/Text';

export const Application = () => (
    <div className={styles.application}>
        <div className={styles.application__headline}>
            <Text className={styles["application__headline-title"]} headline='1'>СТРОЙМАТЕРИАЛЫ СО СКИДКОЙ ДО 20%</Text>
            <Text className={styles["application__headline-descrition"]} size='xl'>Успейте заказать в нашем магазине строительные материалы со скидкой до 20%. Для этого вам необходимо отслеживать проводимые нашей компанией скидки и акции.
                Чтобы заказать стройматериалы, оставьте заявку на сайте или позвоните по номеру 8 800 333 22 33</Text>
        </div>
        <Form />
    </div>
);