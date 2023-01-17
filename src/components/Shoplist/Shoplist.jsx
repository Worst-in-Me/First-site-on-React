import styles from './Shoplist.module.css';
import { ShoplistCard } from './ShoplistCard/ShoplistCard';
import { Headline } from '../Headline/Headline';
import suckstion from './img/suckstion.jpg';

const data = [
    {
        src: suckstion,
        title: 'ЧЕРЕПИЦА',
        description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
        price: '300$',
    },
    {
        src: suckstion,
        title: 'ГРАНИТ',
        description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
        price: '300$',
    },
    {
        src: suckstion,
        title: 'ЦЕМЕНТ',
        description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
        price: '300$',
    },
    {
        src: suckstion,
        title: 'ИЗВЕСТЬ',
        description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
        price: '300$',
    },
    {
        src: suckstion,
        title: 'БЕТОН',
        description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
        price: '300$',
    },
    {
        src: suckstion,
        title: 'КИРПИЧ',
        description: 'Материалы, применяемые в строительстве для постройки, ремонта и реконструкций сооружений',
        price: '300$',
    },
];

export const Shoplist = () => (
    <div className={styles.shoplist} id="shoplist">
        <Headline title='Каталог строительных материалов' description='В каталоге нашего магазина представлено большое количество строительных материалов' />
        <div class={styles.shoplist__cards}>
            {data.map(props => <ShoplistCard key={props.title} {...props}/>)}
        </div>
    </div>
);