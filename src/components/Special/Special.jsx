import styles from './Special.module.css';
import { Headline } from '../Headline/Headline';
import { SpecialCard } from './SpecialCard/SpecialCard';
import block from './img/block.jpeg';
import hand from './img/hand.jpg';
import work from './img/work.jpg';

const data = [
    {
        src: block,
        title: 'Скидка 20% на кирпичи',
        description: 'Только до конца месяца в нашем магазине действует специальная акция – скидка до 20% на кирпичи',
    },
    {
        src: hand,
        title: 'Бесплатная доставка',
        description: 'Только до конца месяца в нашем магазине действует специальная акция – бесплатная доставка',
    },
    {
        src: work,
        title: 'Скидка 10% на сухие смеси',
        description: 'Только до конца месяца в нашем магазине действует специальная акция – скидка 10% на сухую смесь',
    },
];

export const Special = () => (
    <div className={styles.special}>
        <Headline title='Специальные предложения' description='Каждый месяц в нашем магазине проводятся различные скидки и акции' />
        <div className={styles.special__cards}>
            {data.map(props => <SpecialCard key={props.title} {...props} />)}
        </div>
    </div>
);