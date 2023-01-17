import styles from './ReviewCard.module.css';
import { Text } from '../../Text/Text';

export const ReviewCard = ({src, title, description}) => (
    <div className={styles.review__card}>
        <div className={styles["review__card-img"]}>
            <img src={src} alt="" />
        </div>
        <div className={styles["review__card-title"]}>{title}</div>
        <Text className={styles['review__card-text']} size='m'>{description}</Text>
    </div>
);