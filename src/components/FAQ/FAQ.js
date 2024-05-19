import searchIcon from '../../imgs/search.svg';
import {useCallback, useMemo, useState} from "react";
import FAQItem from "./FAQItem";
import './FAQ.css';

const FAQ_DATA = [
    {
        id: 1,
        question: 'Что мне нужно знать о бронировании отеля?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, nostrum.',
    },
    {
        id: 2,
        question: 'Нужно ли привозить корм питомцу?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, nostrum.',
    },
    {
        id: 3,
        question: 'Могу ли я оставить на передержку животное, которое я нашел на улице?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, nostrum.',
    },
]

export default function FAQ() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = useMemo(() => FAQ_DATA.filter(item =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase())
    ),[searchTerm]);

    const search = useCallback((e) =>
        setSearchTerm(e.target.value)
    , [setSearchTerm])

    return (
        <div className="faq">
            <div className="faq--input">
                <input
                    type="text"
                    placeholder="Поиск..."
                    onChange={search}
                />
                <img src={searchIcon} alt="Иконка поиска" />
            </div>
            <div className="faq--list">
                {filteredData.map(faq => (
                    <FAQItem key={faq.id} faq={faq} />
                ))}
            </div>
        </div>
    );
}