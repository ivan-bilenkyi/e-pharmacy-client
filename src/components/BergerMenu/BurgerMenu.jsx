import { Link, NavLink, useLocation } from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import { useState } from "react";
import { ModalBurger } from "../ModalBurger/ModalBurger.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import { logOut } from "../../redux/auth/operations.js";

export const BurgerMenu = () => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const { pathname } = useLocation();
    const isHomePage = pathname === "/";

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogOut = () => {
        dispatch(logOut());
        closeModal(); // Закрити модальне вікно після виходу з системи
    };

    return (
        <>
            <div onClick={openModal} className="block lg:hidden cursor-pointer">
                <svg width="32" height="26">
                    <use href={`${isHomePage ? `${sprite}#burger-white` : `${sprite}#burger-green`}`}></use>
                </svg>
            </div>

            <ModalBurger isOpen={isModalOpen} onClose={closeModal}>
                <div className='flex flex-col justify-between items-center h-full'>
                    <ul className='flex flex-col items-center gap-1'>
                        <li className='bg-white rounded-[60px] border border-borderNavLink p-2 text-text text-14 leading-100 font-normal'>
                            <NavLink to='/' onClick={closeModal} className={({ isActive }) =>
                                isActive ? 'bg-green rounded-[60px] text-white py-2 px-5 block' : 'block py-2 px-5'
                            }>
                                Home
                            </NavLink>
                        </li>
                        <li className='bg-white rounded-[60px] border border-borderNavLink p-2 text-text text-14 leading-100 font-normal'>
                            <NavLink
                                to='/medicine-store' onClick={closeModal}
                                className={({ isActive }) =>
                                    isActive ? 'bg-green rounded-[60px] text-white py-2 px-5 block' : 'block py-2 px-5'
                                }
                            >
                                Medicine Store
                            </NavLink>
                        </li>
                        <li className='bg-white rounded-[60px] border border-borderNavLink p-2 text-text text-14 leading-100 font-normal'>
                            <NavLink to='/medicine' onClick={closeModal} className={({ isActive }) =>
                                isActive ? 'bg-green rounded-[60px] text-white py-2 px-5 block' : 'block py-2 px-5'
                            }>
                                Medicine
                            </NavLink>
                        </li>
                    </ul>

                    {!isLoggedIn ? (
                        <div className='flex flex-col items-center gap-3'>
                            <Link to='/register' onClick={closeModal}
                                  className='py-4 px-9 rounded-[60px] border border-gray-300 text-gray-700 text-14 leading-100 font-normal'>
                                Register
                            </Link>
                            <Link to='/login' onClick={closeModal} className='underline text-gray-700 text-14 leading-100 font-normal'>
                                Login
                            </Link>
                        </div>
                    ) : (
                        <button
                            className='rounded-[60px] text-14 leading-100 font-normal border border-gray-300 px-8 py-4 text-subText w-[117px]'
                            onClick={handleLogOut}
                        >
                            Log out
                        </button>
                    )}
                </div>
            </ModalBurger>
        </>
    );
};
