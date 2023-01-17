import styles from './PopularCard.module.css';
import { Text } from '../../Text/Text';
import { Button } from '../../Button/Button';
import { Modal } from '../../Modal/Modal';
import { useCallback, useState } from 'react';

export const PopularCard = ({src, title, description, price}) => {
    const [open, setOpen] = useState(false);

    const OpenModal = useCallback(() => {
        setOpen(true);
    }, []); 

    const CloseModal = useCallback(() => setOpen(false), []);

    return (
        <div className={styles.popular__card}>
            <div className={styles['popular__card-img']}>
                <img src={src} alt="" />
            </div>
            <Text className={styles['popular__card-title']} size='l'>{title}</Text>
            <div className={styles["popular__card-description"]}>{description}</div>
            <Text className={styles['popular__card-price']} size='l'>{price}</Text>
            <Button onClick={OpenModal}>Купить</Button>
            {open && <Modal onClose={CloseModal}/>}
        </div>
    )
};