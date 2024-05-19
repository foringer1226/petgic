import ServicesComponent from "./ServicesComponent";
import './Services.css';

const SERVICES_DATA = [
    {
        id: 1,
        title: 'Услуги проживания',
        content: (
            <div className="dropdown--content">
                <div>
                    <p>Ваш питомец слишком своенравен?</p>
                </div>
                <div>
                    <p>Вы можете выбрать одно из двух: тешить себя мыслью, что у него сложный характер, или доверить его воспитание специалистам. Профессиональные кинологи помогут вашей собаке освоить необходимые в повседневной жизни навыки.</p>
                </div>
                <div>
                    <p>Мы предлагаем разнообразные курсы и программы для вашего питомца.</p>
                    <p>Общие курсы: курс щенка, курс дрессировки (ОКД), управляемая городская собака (УГС).</p>
                    <p>Специальные курсы: аджилити, noseWork, флайбол, обидиенс, ралли-Обидиенс.</p>
                </div>
                <div>
                    <p className="services-component--li">Программа тренировок составляется с учетом пожеланий хозяина, а также характера питомца.</p>
                    <p className="services-component--li">Профессиональный тренер даст подробную консультацию и поможет вашей собаке освоить все необходимые команды и навыки.</p>
                    <p className="services-component--li">После окончания обучения животного тренер проведет несколько совместных с хозяином занятий, чтобы научить его правильно общаться с собакой.</p>
                    <p className="services-component--li">При тренировках собаки, проживающей в отеле, проводится видеофиксация занятий.</p>
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: 'Дрессировка',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum ipsa nesciunt? Accusamus amet animi aperiam autem beatae consectetur culpa cumque cupiditate deleniti dolor dolores doloribus esse, excepturi exercitationem laborum molestias mollitia nam natus nostrum recusandae repellendus rerum soluta sunt totam unde velit voluptas. Perferendis quas quasi quisquam sunt voluptatibus?'
    },
    {
        id: 3,
        title: 'Груминг собак',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum ipsa nesciunt? Accusamus amet animi aperiam autem beatae consectetur culpa cumque cupiditate deleniti dolor dolores doloribus esse, excepturi exercitationem laborum molestias mollitia nam natus nostrum recusandae repellendus rerum soluta sunt totam unde velit voluptas. Perferendis quas quasi quisquam sunt voluptatibus?'
    },
    {
        id: 3,
        title: 'Груминг кошек',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum ipsa nesciunt? Accusamus amet animi aperiam autem beatae consectetur culpa cumque cupiditate deleniti dolor dolores doloribus esse, excepturi exercitationem laborum molestias mollitia nam natus nostrum recusandae repellendus rerum soluta sunt totam unde velit voluptas. Perferendis quas quasi quisquam sunt voluptatibus?'
    },
    {
        id: 3,
        title: 'Зоо-такси',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa cum ipsa nesciunt? Accusamus amet animi aperiam autem beatae consectetur culpa cumque cupiditate deleniti dolor dolores doloribus esse, excepturi exercitationem laborum molestias mollitia nam natus nostrum recusandae repellendus rerum soluta sunt totam unde velit voluptas. Perferendis quas quasi quisquam sunt voluptatibus?'
    },
]

export default function Services() {

    return (
        <div className="services">
            {SERVICES_DATA.map((faq) => (
                <ServicesComponent key={faq.id} title={faq.title} content={faq.content}/>
            ))}
        </div>
    )
}