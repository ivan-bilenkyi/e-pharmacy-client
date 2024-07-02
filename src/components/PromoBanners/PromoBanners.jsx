import {Link} from "react-router-dom";
import {MedicineStores} from "../MedicineStores/MedicineStores.jsx";

export const PromoBanners = () => {

    return (
        <section className='px-20 py-40 md:px-[32px] lg:w-[1288px] m-auto'>
            <ul className='md:w-[670px] lg:w-[1019px] mb-[80px] md:mg-[120px] flex flex-col gap-[16px] items-center md:flex-row md:flex-wrap md:gap-[28px] m-auto lg:mb-[120px]'>
                <li className='w-[335px] md:w-[321px] px-18 py-14 bg-lightGray rounded-[27px] shadow-darkAlpha border-[1.155px] flex flex-col gap-14'>
                    <div className='flex gap-14 items-center'>
                        <div className='w-[54px] h-[54px] rounded-50 bg-lightGreen flex items-center justify-center'>
                            <span>1</span>
                        </div>
                        <p className='text-16 font-medium leading-140'>Huge Sale</p>
                    </div>
                    <div className='relative'>
                        <span className='text-24 font-medium leading-140'>70%</span>
                        <Link to='#' className='absolute left-[97px] bottom-0 text-text text-13 leading-140 font-normal'>Shop now</Link>
                    </div>
                </li>
                <li className='w-[335px] md:w-[321px] px-18 py-14 bg-lightGray rounded-[27px] shadow-darkAlpha border-[1.155px] flex flex-col gap-14'>
                    <div className='flex gap-14 items-center'>
                        <div className='w-[54px] h-[54px] rounded-50 bg-lightGreen flex items-center justify-center'>
                            <span>2</span>
                        </div>
                        <p className='text-16 font-medium leading-140'>Secure delivery</p>
                    </div>
                    <div className='relative'>
                        <span className='text-24 font-medium leading-140'>100%</span>
                        <Link to='#' className='absolute left-[97px] bottom-0 text-text text-13 leading-140 font-normal'>Read more</Link>
                    </div>
                </li>
                <li className='w-[335px] md:w-[321px] px-18 py-14 bg-lightGray rounded-[27px] shadow-darkAlpha border-[1.155px] flex flex-col gap-14'>
                    <div className='flex gap-14 items-center'>
                        <div className='w-[54px] h-[54px] rounded-50 bg-lightGreen flex items-center justify-center'>
                            <span>3</span>
                        </div>
                        <p className='text-16 font-medium leading-140'>Off</p>
                    </div>
                    <div className='relative'>
                        <span className='text-24 font-medium leading-140'>35%</span>
                        <Link to='#' className='absolute left-[97px] bottom-0 text-text text-13 leading-140 font-normal'>Shop now</Link>
                    </div>
                </li>
            </ul>
            <MedicineStores/>
        </section>
    )
}