import styles from './Contacts.module.css';
import { Text } from '../Text/Text';
import telegram from './img/telegram.png';
import whatsapp from './img/whatsapp.png';
import youtube from './img/youtube.png';
import { useEffect } from 'react';



export const Contacts = () => {
    useEffect(() => {
        const ymaps = window.ymaps;
        ymaps.ready(init); 
        var myMap;
        
        function init() {
        
            myMap = new ymaps.Map("map", {
                center: [43.238253, 76.945465], // Координаты центра карты
                zoom: 13 // Маштаб карты
            }); 
        
            myMap.controls.add(
                new ymaps.control.ZoomControl()  // Добавление элемента управления картой
            ); 
        
            const myPlacemark = new ymaps.Placemark([43.238253,76.945465], { // Координаты метки объекта
                balloonContent: "<div class='ya_map'>Заезжайте в гости!</div>" // Подсказка метки
            }, {
                preset: "twirl#redDotIcon" // Тип метки
            });
            
            myMap.geoObjects.add(myPlacemark); // Добавление метки
            myPlacemark.balloon.open(); // Открытие подсказки метки
            
        };
    });

    return (
        <div className={styles.contacts} id="contacts">
            <div id="map"></div>
            <div className={styles.contacts__information}>
                <div className={styles.contacts__info}>
                    <Text className={styles["contacts__info-title"]} size='m'>Контактная информация:</Text>
                    <ul className={styles["contacts__info-list"]}>
                        <Text className={styles["contacts__info-item"]} size='m'>Чебоксары, школьный проезд 1.</Text>
                        <Text className={styles["contacts__info-item"]} size='m'>E-mail: Test@yandex.ru</Text>
                        <Text className={styles["contacts__info-item"]} size='m'>Телефон: 8 800 300 06 00 отдела продаж</Text>
                        <Text className={styles["contacts__info-item"]} size='m'>Телефон: 8 800 340 06 00 отдела сбыта</Text>
                        <Text className={styles["contacts__info-item"]} size='m'>Контактное лицо: Степанов В.И.</Text>
                    </ul>
                </div>
                <div className={styles.contacts__social}>
                    <Text className={styles["contacts__social-title"]} size='m'>Присоединяйтесь к нам в социальных сетях!</Text>
                    <div className={styles["contacts__social-icons"]}>
                        <div className={styles["contacts__social-icon"]}>
                            <img src={telegram} alt="" />
                        </div>
                        <div className={styles["contacts__social-icon"]}>
                            <img src={whatsapp} alt="" />
                        </div>
                        <div className={styles["contacts__social-icon"]}>
                            <img src={youtube} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};