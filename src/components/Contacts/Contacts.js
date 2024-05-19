import './contacts.css'
import geoIcon from '../../imgs/contacts/geo.svg'
import phoneIcon from '../../imgs/contacts/phone.svg'
import emailIcon from '../../imgs/contacts/email.svg'
import vkIcon from '../../imgs/contacts/vk.svg'
import fbIcon from '../../imgs/contacts/facebook.svg'
import tgIcon from '../../imgs/contacts/telegram.svg'

const CONTACTS_DESCRIPTIONS = [
    {
        icon: geoIcon,
        title: 'Московская область, Пушкинский район, д.Левково',
    },
    {
        icon: phoneIcon,
        title: '+7(916)123-45-41 с 9:00 до 22:00',
    },
    {
        icon: emailIcon,
        title: 'petgichouse@mail.ru',
    },
];

const CONTACTS_SOCIALS = [
    vkIcon,
    fbIcon,
    tgIcon,
]

export default function Contacts() {
    return (
        <div className="contacts">
            <div className="contacts--map">
                <iframe
                    src="https://yandex.ru/map-widget/v1/?um=constructor%3Abd49631d751dfdb10b8919fd7d4365429e464bcb53bd749d145b402f53eff6f7&amp;source=constructor"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                />
            </div>
            <div className="contacts--info">
                {CONTACTS_DESCRIPTIONS.map((description, id) => (
                    <div className="contacts--description" key={id}>
                        <img src={description.icon} alt={description.title} />
                        <p>{description.title}</p>
                    </div>
                ))}
                <div className="contacts--socials" >
                    {CONTACTS_SOCIALS.map((social, id) => (
                        <img src={social} alt="" key={id}/>
                    ))}
                </div>
                <div className="contacts--requisites">
                    <p>Реквизиты компании:</p>
                    <div className="contacts--details">
                        <p>ИНН/КПП: 7751034550/503001001</p>
                        <p>ОГРН: 1177746005579 от 09.01.2017</p>
                        <p>БИК: 044525225</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
