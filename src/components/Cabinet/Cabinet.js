import dogsImg from '../../imgs/cabinet/dogs.png';
import './Cabinet.css';

export default function Cabinet() {

    return (
        <div className="cabinet">
            <img src={dogsImg} alt="Собаки" className="cabinet--image"/>
            <div className="cabinet--content">
                <div className="cabinet--name">Лина</div>
                <div className="cabinet--schedule">
                    <p><span>10:00</span> Просыпается</p>
                    <p><span>11:00</span> Прогулка</p>
                    <p><span>12:30</span> Завтрак</p>
                    <p><span>13:00</span> Отдых</p>
                    <p><span>15:00</span> Прогулка и игры</p>
                    <p><span>16:00</span> Занятия с кинологом</p>
                    <p><span>18:00</span> Прогулка с другими собаками</p>
                    <p><span>20:00</span> Ужин</p>
                    <p><span>23:00</span> Прогулка перед сном</p>
                    <p><span>23:30</span> Отдых</p>
                </div>
                <div className="cabinet--comment">
                    <p className="cabinet--comment-title">Комментарий:</p>
                    <div className="cabinet--comment-text">
                        Очень активная и дружелюбная собака. Обожает игры с другими собаками. Пугается громких резких звуков. Ест траву и любит играть с кольцами.
                    </div>
                </div>
            </div>
        </div>
    )
}