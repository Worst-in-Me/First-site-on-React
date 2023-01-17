import styles from './Review.module.css';
import { ReviewCard } from './ReviewCard/ReviewCard';
import { Headline } from '../Headline/Headline';
import fisting from './img/fisting.jpg';
import suckstion from './img/suckstion.jpg';
import boy from './img/boynextdoor.jpg';

const data = [
    {
        src: fisting,
        title: 'VAN',
        description: 'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое!',
    },
    {
        src: suckstion,
        title: 'BILLY',
        description: 'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое!',
    },
    {
        src: boy,
        title: 'СТЕПАН МИХАЙЛОВ',
        description: 'Все что указано в договоре, было выполнено в срок, поэтому могу поставить вашей компании "отлично" и советовать другим обращаться только к вам. Приятно удивлена уровнем ваших мастеров и их дисциплиной. Спасибо вам большое!',
    },
];

export const Review = () => (
    <div className={styles.review} id="review">
        <Headline title='Отзывы наших клиентов' description='Что говорят о нашей компании довольные клиенты' />
        <div className={styles.review__cards}>
            {data.map(props => <ReviewCard key={props.title} {...props}/>)}
        </div>
    </div>
);