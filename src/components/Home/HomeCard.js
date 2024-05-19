import './Home.css';
import {Link} from "react-router-dom";

export default function HomeCard({image, alt, title, path}) {
    return (
        <Link to={path}>
            <div className="home-card">
                <img className="home-card--image" src={image} alt={alt}/>
                <div className="home-card--title">
                    <p>{title}</p>
                </div>
            </div>
        </Link>
    )
}