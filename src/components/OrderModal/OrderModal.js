import React, {useCallback, useState} from "react";
import {observer} from "mobx-react-lite";
import OrderStore from "../../mobx/stores/order.store";
import './OrderModal.css';

const OrderModal = observer(({
    close,
    isOpen
}) => {
    const [order, setOrder] = useState({})

    const handleEmailChange = useCallback((event, field) => {
        setOrder({...order, [field]: event.target.value})
    }, [order])

    const handleSend = useCallback(async () => {
        await OrderStore.createOrder(order)
    }, [order])

    const closeModal = useCallback(() => {
        close()
    }, [close])

    if (!isOpen) {
        return null
    }

    return (
        <div className="order-modal" onClick={closeModal}>
            <div className="order-modal__wrapper" onClick={e => e.stopPropagation()}>
                <div className="order-modal__content">
                    <input
                        type="text"
                        placeholder="ФИО"
                        value={order.fullName}
                        onChange={(e) => handleEmailChange(e, "fullName")}
                    />
                    <input
                        type="text"
                        placeholder="Кличка питомца"
                        value={order.petName}
                        onChange={(e) => handleEmailChange(e, "petName")}
                    />
                    <input
                        type="tel"
                        placeholder="Номер телефона"
                        value={order.phone}
                        onChange={(e) => handleEmailChange(e, "phone")}
                    />
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={order.email}
                        onChange={(e) => handleEmailChange(e, "email")}
                    />
                    <input
                        type="date"
                        placeholder="Дата приезда"
                        value={order.date}
                        onChange={(e) => handleEmailChange(e, "date")}
                    />
                </div>
                <button
                    className="button"
                    onClick={handleSend}
                >
                    Отправить
                </button>
            </div>
        </div>
    )
})

export default OrderModal