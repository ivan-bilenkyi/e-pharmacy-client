import {Logo} from "./Logo.jsx";
import {Link, useLocation} from "react-router-dom";
import sprite from "../../assets/sprite.svg";

export const Footer = () => {
    const {pathname} = useLocation();
    const isAuthPage = pathname === "/register" || pathname === "/login";
    return (
        !isAuthPage && (
            <footer className='bg-green px-20 py-40'>
                <div
                    className='border-b-[1px] mb-[20px] md:mb-[32px] lg:mb[40px] md:flex md:justify-between pb-[80px] md:pb-[88px] lg:pb-[64px]'>
                    <div className='mb-[40px] md:mb-0'>
                        <Logo/>
                        <p className='w-[261px] lg:w-[311px] text-14 md:text-16 leading-128 font-normal text-gray'>Get
                            the medicine to help you feel
                            better, get back to your active life, and enjoy every moment.</p>
                    </div>
                    <div className=' md:flex md:flex-col md:gap-[32px]  lg:flex-row'>
                        <ul className='flex gap-[28px] md:gap-[32px] lg:gap-[50px]'>
                            <Link to='/' className='text-14 md:text-20 leading-128 font-normal text-gray'>Home</Link>
                            <Link to='/medicine-store' className='text-14 md:text-20 leading-128 font-normal text-gray'>Medicine
                                Store</Link>
                            <Link to='/medicine'
                                  className='text-14 md:text-20 leading-128 font-normal text-gray'>Medicine</Link>
                        </ul>
                        <ul className='hidden md:flex gap-[12px] md:justify-end lg:ml-[270px]'>
                            <li className='p-[8px] border-[1px] border-mediaBorder rounded-[10px]'>
                                <svg width="28" height="28">
                                    <use href={`${sprite}#facebook`}></use>
                                </svg>
                            </li>
                            <li className='p-[8px] border-[1px] border-mediaBorder rounded-[10px]'>
                                <svg width="28" height="28">
                                    <use href={`${sprite}#instagram`}></use>
                                </svg>
                            </li>
                            <li className='p-[8px] border-[1px] border-mediaBorder rounded-[10px]'>
                                <svg width="28" height="28">
                                    <use href={`${sprite}#youtube`}></use>
                                </svg>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div
                        className='flex flex-wrap gap-[10px] md:gap-[24px] md:justify-center text-[10px] leading-100 md:text-14 md:leading-128 font-normal text-gray'>
                        <p>© E-Pharmacy 2023. All Rights Reserved</p>
                        <span className='w-[1px] h-[10px] bg-background rounded-[8px]'></span>
                        <p>Privacy Policy</p>
                        <span className='w-[1px] h-[10px] bg-background rounded-[8px]'></span>
                        <p>Terms & Conditions</p>
                    </div>
                </div>
            </footer>
        )
    )
}