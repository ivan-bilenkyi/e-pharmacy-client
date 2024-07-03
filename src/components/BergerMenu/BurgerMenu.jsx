import {Link, NavLink, useLocation} from "react-router-dom";
import sprite from "../../assets/sprite.svg";
import { useState } from "react";
import { ModalBurger } from "../ModalBurger/ModalBurger.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoggedIn} from "../../redux/auth/selectors.js";
import {logOut} from "../../redux/auth/operations.js";

export const BurgerMenu = () => {
    const dispatch = useDispatch()
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
        dispatch(logOut())
    }

    return (
        <>
            <div onClick={openModal} className="block lg:hidden">
                <svg width="32" height="26">
                    <use href={`${isHomePage ? `${sprite}#burger-white` : `${sprite}#burger-green`}`}></use>
                </svg>
            </div>

            <ModalBurger isOpen={isModalOpen} onClose={closeModal}>
                <div className='flex flex-col justify-between items-center h-full'>
                    <ul className='flex flex-col items-center gap-px'>
                        <li className='bg-white rounded-60 border border-borderNavLink p-2 text-text text-14 leading-100 font-normal'>
                            <NavLink to='/' className={({isActive}) =>
                                isActive ? 'bg-green rounded-60 text-white py-2 px-5 block' : 'block py-2 px-5'
                            }>
                                Home
                            </NavLink>
                        </li>
                        <li className='bg-white rounded-60 border border-borderNavLink p-2 text-text text-14 leading-100 font-normal'>
                            <NavLink
                                to='/medicine-store'
                                className={({isActive}) =>
                                    isActive ? 'bg-green rounded-60 text-white py-2 px-5 block' : 'block py-2 px-5'
                                }
                            >
                                Medicine Store
                            </NavLink>
                        </li>
                        <li className='bg-white rounded-60 border border-borderNavLink p-2 text-text text-14 leading-100 font-normal'>
                            <NavLink to='/medicine' className={({isActive}) =>
                                isActive ? 'bg-green rounded-60 text-white py-2 px-5 block' : 'block py-2 px-5'
                            }>
                                Medicine
                            </NavLink>
                        </li>
                    </ul>

                    {!isLoggedIn ? (
                        <div className='items-center gap-14 flex flex-col'>
                            <Link to='/register'
                                  className='py-4 px-9 rounded-60 border border-grayAlpha text-subText text-14 leading-100 font-normal'>Register</Link>
                            <Link to='/login' className='underline text-subText text-14 leading-100 font-normal '>Login</Link>
                        </div>
                    ) : (
                        <button
                        className='rounded-60 text-14 leading-100 font-normal border border-grayAlpha50 px-[32px] py-[16px] text-subText w-[117px]'
                        onClick={handleLogOut}
                >
                    Log out
                </button>
                )}
            </div>
        </ModalBurger>
</>
)
    ;
};
