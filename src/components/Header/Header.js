import React, {useCallback, useState} from "react";
import logo from '../../imgs/logo.png';
import phoneIcon from '../../imgs/menu/phone.svg';
import './Header.css';
import {Link} from "react-router-dom";
import UserStore from "../../mobx/stores/user.store";
import {observer} from "mobx-react-lite";
import RegistrationModal from "../RegistrationModal/RegistrationModal";

const Header = observer(() => {
    const user = UserStore.user
    const [modalIsRegistration, setModalIsRegistration] = useState(false);
    const [modalIsOpen, setIsOpen] = useState(false);

    const openRegistrationModal = useCallback(() => {
        setModalIsRegistration(true);
        setIsOpen(true);
    }, [setIsOpen, setModalIsRegistration])

    const openAuthModal = useCallback(() => {
        setModalIsRegistration(false);
        setIsOpen(true);
    }, [setIsOpen, setModalIsRegistration])

    const close = useCallback(() => {
        setIsOpen(false);
    },[setIsOpen])

    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo"/>
            </Link>
            <div className="menu">
                <div className="phone-wrapper">
                    <img src={phoneIcon} alt="Phone Icon"/>
                    <p className="phone">+7(916)123-45-41</p>
                </div>
                {!user ? (
                    <>
                        <button
                            className="button registration"
                            onClick={openRegistrationModal}
                        >
                            Зарегистрироваться
                        </button>
                        <button
                            className="button login"
                            onClick={openAuthModal}
                        >
                            Войти
                        </button>
                    </>
                ) : (
                    <>
                        <Link to="/cabinet">
                            <button
                                className="button registration"
                            >
                                Личный кабинет
                            </button>
                        </Link>
                        <button
                            className="button login"
                            onClick={() => UserStore.logout()}
                        >
                            Выйти
                        </button>
                    </>
                )}
            </div>
            {!user && (
                <RegistrationModal
                    modalIsRegistration={modalIsRegistration}
                    setModalIsRegistration={setModalIsRegistration}
                    close={close}
                    isOpen={modalIsOpen}
                />
            )}
        </header>
    )
})

export default Header