import dogImage from '../../imgs/home/dog.png';
import PricesCard from "./PricesCard";
import './Prices.css';
import RegistrationModal from "../RegistrationModal/RegistrationModal";
import React, {useCallback, useState} from "react";
import UserStore from "../../mobx/stores/user.store";
import OrderModal from "../OrderModal/OrderModal";
import {observer} from "mobx-react-lite";

const PRICES_CARDS = [
    {
        id: 1,
        image: dogImage,
        title: 'Стандарт',
        price: 1300,
        options: [
            {
                id: 1,
                text: 'Проживание одного Вашего питомца в отдельном номере',
            },
            {
                id: 2,
                text: 'Выгул 3 раза в день',
            },
            {
                id: 3,
                text: 'Соблюдение особых правил и ритуалов',
            },
            {
                id: 4,
                text: 'Игры и развлечения',
            },
        ],
    },
    {
        id: 2,
        image: dogImage,
        title: 'Люкс',
        price: 2300,
        options: [
            {
                id: 1,
                text: 'Все опции пакета Стандарт',
            },
            {
                id: 2,
                text: 'Груминг',
            },
            {
                id: 3,
                text: 'Полное ветеринарное обследование',
            },
            {
                id: 4,
                text: 'Зоотакси',
            },
        ],
    },
    {
        id: 3,
        image: dogImage,
        title: 'Семейный отпуск',
        price: 1700,
        options: [
            {
                id: 1,
                text: 'Проживание ДВУХ и больше питомцев в отдельном номере',
            },
            {
                id: 2,
                text: 'Выгул 3 раза в день',
            },
            {
                id: 3,
                text: 'Соблюдение особых правил и ритуалов',
            },
            {
                id: 4,
                text: 'Игры и развлечения',
            },
        ],
    },
]

const Prices = observer(() => {
    const user = UserStore.user
    const [modalIsRegistration, setModalIsRegistration] = useState(false);
    const [modalRegistrationIsOpen, setRegistrationIsOpen] = useState(false);
    const [modalOrderIsOpen, setOrderIsOpen] = useState(false);

    const openRegistrationModal = useCallback(() => {
        setModalIsRegistration(true);
        setRegistrationIsOpen(true);
    }, [setModalIsRegistration, setRegistrationIsOpen])

    const openOrderModal = useCallback(() => {
        setOrderIsOpen(true);
    }, [setOrderIsOpen])

    const closeRegistrationModal = useCallback(() => {
        setRegistrationIsOpen(false);
    }, [setModalIsRegistration])

    const closeOrderModal = useCallback(() => {
        setOrderIsOpen(false);
    }, [setModalIsRegistration])

    return (
        <div className="prices">
            {PRICES_CARDS.map(card => (
                <PricesCard
                    key={card.id}
                    card={card}
                    handleBuyItemClick={!user ? openRegistrationModal : openOrderModal}
                />
            ))}
            {!user ? (
                <RegistrationModal
                    modalIsRegistration={modalIsRegistration}
                    setModalIsRegistration={setModalIsRegistration}
                    close={closeRegistrationModal}
                    isOpen={modalRegistrationIsOpen}
                />
            ) : (
                <OrderModal
                    close={closeOrderModal}
                    isOpen={modalOrderIsOpen}
                />
            )}
        </div>
    )
})

export default Prices