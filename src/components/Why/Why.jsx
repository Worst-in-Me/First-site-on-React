import styles from './Why.module.css';
import { Headline } from '../Headline/Headline'; 
import { WhyCard } from './WhyCard/WhyCard';
import fast from './img/fast.png';
import price from './img/price.png';
import work from './img/work.png';

const data = [
    {
        src: fast,
        title: 'БЫСТРАЯ ДОСТАВКА',
        description: 'Наша компания сотрудничает с сервисами доставки, поэтому заказы приходят к клиентам быстро',
    },
    {
        src: price,
        title: 'ДОСТУПНАЯ СТОИМОСТЬ',
        description: 'В нашем магазине любой желающий может купить строительные материалы по самым доступным ценам',
    },
    {
        src: work,
        title: 'ОПЫТ РАБОТЫ БОЛЕЕ 10 ЛЕТ',
        description: 'Наша компания занимается продажей и доставкой строительных материалов уже на протяжении более 10 лет',
    },
];

export const Why = () => (
    <div className={styles.why} id="why">
        <Headline title='Почему выбирают именно нас' description='Причины, по которым к нам обращаются многочисленные клиенты'></Headline>
        <div className={styles.why__cards}>
            {data.map(props => <WhyCard key={props.title} {...props} />)}
        </div>
    </div>
);