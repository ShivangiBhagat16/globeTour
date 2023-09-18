import { Link } from 'react-router-dom';
import styles from './CityItem.module.css'

function CityItem({city}) {
    const formatDate = (date) =>
        new Intl.DateTimeFormat("en", {
            day: "numeric",
            month: "long",
            year: "numeric",
            weekday: "long",
        }).format(new Date(date));
            
    return (
        <li>
            <Link className={styles.cityItem} 
                to={`${city.id}?lat=${city.position.lat}&lon=${city.position.lon}&selectedId=${city.id}`}>
                <span className={styles.emoji}>{city.emoji}</span>
                <h3 className={styles.name}>{city.cityName}</h3>
                <time className={styles.date}>{formatDate(city.date)}</time>
            </Link>
        </li>
    )
}

export default CityItem
