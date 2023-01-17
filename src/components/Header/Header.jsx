import styles from './Header.module.css';
import { Text } from '../Text/Text';
import PhoneImage from './phone.png';
import { useCallback, useState } from 'react';
import cn from 'classnames';

const Item = (props) => (
    <li className={styles.list__item}><a {...props} /></li>
);

export const Header = () => {
    const [toggled, setToggled] = useState(true);
    const onBurgerClick = useCallback(() => {
        setToggled((toggled) => !toggled);
    }, [])

    return (
        <>
            <div className={cn(styles.burger, toggled && styles.burger_active)} onClick={onBurgerClick}>
                <div className={styles.burger__line}></div>
                <div className={styles.burger__line}></div>
                <div className={styles.burger__line}></div>
            </div>
            <header className={cn(styles.header, toggled && styles.header_active)} >
                <div>Your logo</div>
                <div className={styles.nav}>     
                    <Text as='ul' className={styles.list} size='l'>
                        <Item href="#why">почему мы</Item>
                        <Item href="#shoplist">каталог</Item>
                        <Item href="#review">отзывы</Item>
                        <Item href="#contacts">контакты</Item>
                    </Text>
                    <Text className={styles.num} size='l'>
                        <img src={PhoneImage} alt="" className={styles.num__img}/>
                        <span>8 800 5555 35 35</span>
                    </Text>                
                </div>
            </header>
        </>   
    )
};