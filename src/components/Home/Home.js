import './Home.css';
import dogImage from '../../imgs/home/dog.png';
import HomeCard from "./HomeCard";

const HOME_CARDS = [
    {
        id: 1,
        image: dogImage,
        alt: 'Dog',
        title: 'Услуги',
        path: '/services'
    },
    {
        id: 2,
        image: dogImage,
        alt: 'Dog',
        title: 'Прайс',
        path: '/prices'
    },
    {
        id: 3,
        image: dogImage,
        alt: 'Dog',
        title: 'FAQ',
        path: '/faq'
    },
    {
        id: 4,
        image: dogImage,
        alt: 'Dog',
        title: 'Отзывы',
        path: '/reviews'
    },
    {
        id: 5,
        image: dogImage,
        alt: 'Dog',
        title: 'Галерея',
        path: '/gallery'
    },
    {
        id: 6,
        image: dogImage,
        alt: 'Dog',
        title: 'Контакты',
        path: '/contacts'
    },
]

export default function Home() {
    return (
        <div className="home">
            {HOME_CARDS.map(card => (
                <HomeCard key={card.id} {...card}/>
            ))}
        </div>
    )
}
