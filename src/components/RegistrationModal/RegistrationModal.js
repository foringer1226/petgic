import emailIcon from "../../imgs/registration/email.svg";
import phoneModalIcon from "../../imgs/registration/phone.svg";
import React, {useCallback, useState} from "react";
import UserStore from "../../mobx/stores/user.store";
import {observer} from "mobx-react-lite";

const RegistrationModal = observer(({
    modalIsRegistration,
    setModalIsRegistration,
    isOpen,
    close
}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [modalIsEmail, setModalIsEmail] = useState(true);

    const handleEmailChange = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail])

    const handlePasswordChange = useCallback((event) => {
        setPassword(event.target.value)
    }, [setPassword])

    const closeModal = useCallback(() => {
        close()
    }, [close])

    const handleRegister = useCallback(async () => {
        await UserStore.createUser({
            email,
            password
        })
        await UserStore.login({
            email,
            password
        })
        if (UserStore.user) {
            closeModal()
            setEmail('')
            setPassword('')
        }
    }, [email, password, closeModal])

    const handleLogin = useCallback(async () => {
        await UserStore.login({
            email,
            password
        })
        if (UserStore.user) {
            closeModal()
            setEmail('')
            setPassword('')
        }
    }, [email, password, closeModal])

    if (!isOpen) {
        return null
    }

    return (
        <div className="modal" onClick={closeModal}>
            <div className="modal__wrapper" onClick={e => e.stopPropagation()}>
                <div className="modal__header">
                    <div
                        className={`${modalIsEmail ? 'modal__button-active' : 'modal__button-inactive'} modal__button`}
                        onClick={() => setModalIsEmail(!modalIsEmail)}
                    >
                        <img
                            className="modal__icon"
                            src={emailIcon}
                            alt=""
                        />
                    </div>
                    <div
                        className={`${!modalIsEmail ? 'modal__button-active' : 'modal__button-inactive'} modal__button modal__phone-button`}
                        onClick={() => setModalIsEmail(!modalIsEmail)}
                    >
                        <img
                            className="modal__icon"
                            src={phoneModalIcon}
                            alt=""
                        />
                    </div>
                </div>
                <div className="modal__content">
                    {modalIsEmail ? (
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={handleEmailChange}
                            value={email}
                        />
                    ) : (
                        <input
                            type="phone"
                            placeholder="Телефон"
                            onChange={handlePasswordChange}
                            value={password}
                        />
                    )}
                    <input type="password" placeholder="Пароль"/>
                    {modalIsRegistration ? (
                        <>
                            <button className="button" onClick={handleRegister}>Зарегистрироваться</button>
                            <p className="modal__footer">
                                {'Есть аккаунт? '}
                                <span
                                    onClick={() => setModalIsRegistration(!modalIsRegistration)}
                                    className="modal__link"
                                >
                                    Войти
                                </span>
                            </p>
                        </>
                    ) : (
                        <>
                            <button className="button" onClick={handleLogin}>Войти</button>
                            <p className="modal__footer">
                                {'Нет аккаунта? '}
                                <span
                                    onClick={() => setModalIsRegistration(!modalIsRegistration)}
                                    className="modal__link"
                                >
                                    Зарегистрироваться
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
})

export default RegistrationModal