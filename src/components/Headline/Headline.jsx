import styles from './Headline.module.css';
import { Text } from '../Text/Text';

export const Headline = ({title, description}) => (
    <div className={styles.headline}>
            <Text className={styles.headline__headliner} headline='2'>{title}</Text>
            <Text size='l'>{description}</Text>
    </div>
);