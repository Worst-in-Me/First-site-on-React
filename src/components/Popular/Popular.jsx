import { PopularCard } from './PopularCard/PopularCard';
import { Headline } from '../Headline/Headline';
import styles from './Popular.module.css';
import fisting from './img/fisting.jpg';
import boy from './img/boynextdoor.jpg';
import suckstion from './img/suckstion.jpg';

const data = [
    {
        src: fisting,
        title: 'FISTING',
        description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
        price: '300$',
    },
    {
        src: boy,
        title: 'SUCKTION',
        description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
        price: '400$'},
    {
        src: suckstion,
        title: 'BOY NEXT DOOR',
        description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
        price: '500$',
    },
];

export const Popular = () => (
    <div className={styles.popular}>
        <Headline title='Популярные товары' description='В каталоге нашего магазина представлено большое количество строительных материалов' />
        <div className={styles.popular__cards}>
            {data.map(props => <PopularCard key={props.title} {...props} />)}
        </div>
    </div>
);