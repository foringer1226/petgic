import dogImage from '../../imgs/home/dog.png';
import './Gallery.css';

const GALLERY_CARDS = [
    {
        id: 1,
        image: dogImage,
        alt: 'Dog',
    },
    {
        id: 2,
        image: dogImage,
        alt: 'Dog',
    },
    {
        id: 3,
        image: dogImage,
        alt: 'Dog',
    },
    {
        id: 4,
        image: dogImage,
        alt: 'Dog',
    },
    {
        id: 5,
        image: dogImage,
        alt: 'Dog',
    },
    {
        id: 6,
        image: dogImage,
        alt: 'Dog',
    },
    {
        id: 7,
        image: dogImage,
        alt: 'Dog',
    },
    {
        id: 8,
        image: dogImage,
        alt: 'Dog',
    },
    {
        id: 9,
        image: dogImage,
        alt: 'Dog',
    },
]

export default function Gallery() {

    return (
        <div className="gallery">
            <div className="gallery--header">
                <h1>Галерея</h1>
            </div>
            <div className="gallery--content">
                {GALLERY_CARDS.map(card => (
                    <div
                        key={card.id}
                        className="gallery--item"
                    >
                        <img
                            className="gallery--img"
                            src={card.image}
                            alt={card.alt}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}