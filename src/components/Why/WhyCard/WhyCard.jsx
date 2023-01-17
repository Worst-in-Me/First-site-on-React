import styles from './WhyCard.module.css';
import { Text } from '../../Text/Text';

export const WhyCard = ({src, title, description}) => (
    <div className={styles.why__card}>
        <div className={styles['why__card-img']}>
            <img src={src} alt="" />
        </div>
        <Text className={styles['why__card-title']} size='l'>{title}</Text>
        <div className={styles['why__card-descrition']}>{description}</div>
    </div>
);