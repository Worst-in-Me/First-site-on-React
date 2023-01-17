import styles from './SpecialCard.module.css';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';

export const SpecialCard = ({src, title, description}) => (
    <div className={styles.special__card}>
        <div className={styles["special__card-img"]}>
            <img src={src} alt="" />
        </div>
        <Text className={styles['special__card-title']} size='l'>{title}</Text>
        <Text className={styles['special__card-description']} size='m'>{description}</Text>
        <Button>Узнать подробнее</Button>
    </div>
);