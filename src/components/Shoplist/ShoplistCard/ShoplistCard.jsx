import styles from './ShoplistCard.module.css';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';

export const ShoplistCard = ({src, title, description, price}) => (
    <div className={styles.shoplist__card}>
        <div class={styles['shoplist__card-img']}>
            <img src={src} alt="" />
        </div>
        <div class={styles.shoplist__text}>
            <Text className={styles['shoplist__card-title']} size='l'>{title}</Text>
            <Text className={styles['shoplist__card-desription']}>{description}</Text>
            <Text className={styles['shoplist__card-price']} size='l'>{price}</Text>
            <Button>Купить</Button>
        </div>
    </div>
);