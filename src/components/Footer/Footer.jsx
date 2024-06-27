import {Logo} from "./Logo.jsx";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <footer className='bg-green px-20 py-40'>
            <div className='border-b-[1px]  mb-[20px]'>
                <div className='mb-[40px]'>
                    <Logo/>
                    <p className='w-[261px] text-14 leading-128 font-normal text-gray'>Get the medicine to help you feel
                        better, get back to your active life, and enjoy every moment.</p>
                </div>
                <ul className='flex gap-[28px] mb-[80px]'>
                    <Link to='/' className='text-14 leading-128 font-normal text-gray'>Home</Link>
                    <Link to='/medicine-store' className='text-14 leading-128 font-normal text-gray'>Medicine Store</Link>
                    <Link to='/medicine' className='text-14 leading-128 font-normal text-gray'>Medicine</Link>
                </ul>
            </div>
            <div className='flex flex-wrap gap-[10px] text-[10px] leading-100 font-normal text-gray'>
                <p>© E-Pharmacy 2023. All Rights Reserved</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
            </div>
        </footer>
    )
}