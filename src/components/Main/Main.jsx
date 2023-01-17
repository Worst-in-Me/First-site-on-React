import styles from './Main.module.css';
import { Button } from '../Button/Button'; 
import { Text } from '../Text/Text';

export const Main = () => (
    <div className={styles.main}>
        <div className={styles.main__title}>
            <div className={styles['main__title-container']}>
                <Text className={styles['main__title-headline']} headline='1'>МАГАЗИН СТРОИТЕЛЬНЫХ COCKS С SUCKTION</Text>
                <Text className={styles['main__title-description']} size='xl'>Добро пожаловать на наш сайт. Мы занимаемся продажей и доставкой строительных материалов уже на протяжении 10 лет</Text>
                <Button>Перейти в каталог</Button>
            </div>
        </div>
    </div>
);