import styles from './Oplata.module.css';
import { Headline } from '../Headline/Headline';
import { Text } from '../Text/Text';

export const Oplata = () => (
    <div className={styles.oplata}>
        <Headline  title='Условия оплаты и доставки'/>
        <div className={styles.oplata__container}>
            <Text className={styles["oplata__container-title"]} size='m'>Способы доставки:</Text>
            <ul className={styles["oplata__container-list"]}>
                <Text as='li' className={styles["oplata__container-item"]} size='m'>Доставка по всей России - через транспортные компании, а также наложенным платежом. Стоимость доставки через транспортную компанию составляет около 500 руб., доставка наложенным платежом 400-2 000 руб. в зависимости от размера посылки.</Text>
                <Text as='li' className={styles["oplata__container-item"]} size='m'>Самовывоз.  Самовывоз со склада курьерской службы (срок доставки до пункта самовывоза составляет 7-14  дней в зависимости от региона).</Text>
            </ul>
        </div>
        <div className={styles.oplata__container}>
            <Text className={styles["oplata__container-title"]} size='m'>Способы оплаты:</Text>
            <ul className={styles["oplata__container-list"]}>
                <Text as='li' className={styles["oplata__container-item"]} size='m'>Наличные при получении – (вы делаете заказ, оставляете контактную информацию, указываете в пункте Оплата – «Наличными», при этом варианте оплата осуществляется курьеру при привозе заказа).</Text>
                <Text as='li' className={styles["oplata__container-item"]} size='m'>Наложенный платеж – это значит, что оплачивать заказ вы будете наличными при получении в отделении Почты России.  Дополнительные комиссии в нашем магазине отсутствуют.</Text>
            </ul>
        </div>
    </div>
);