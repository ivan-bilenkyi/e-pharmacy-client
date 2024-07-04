import sprite from '../../assets/sprite.svg'
import {Link} from "react-router-dom";

export const MedicineStoreItem = ({item}) => {
    return (
        <li className='p-[32px] pb-[40px] w-[335px] h-[202px] md:w-[344px] md:h-[276px] lg:w-[392px] bg-lightGreen rounded-[27px] border-[1.55px] border-subText flex justify-between md:flex-col relative overflow-hidden'>
            <div className='w-[130px] md:w-full'>
                <p className='text-16 md:-text-20 font-bold leading-140 text-heading truncate mb-[32px]'>{item.name}</p>
                <div className='flex gap-[8px] mb-[18px]'>
                    <svg width="18" height="18">
                        <use href={`${sprite}#location`}></use>
                    </svg>
                    <p className='text-14 font-normal leading-128 text-text md:text-16'>{item.address}</p>
                </div>
                <div className='flex gap-[8px]'>
                    <svg width="18" height="18">
                        <use href={`${sprite}#phone`}></use>
                    </svg>
                    <p className='text-14 font-normal leading-128 text-text md:text-16'>{item.phone}</p>
                </div>
            </div>
            <div className='block md:flex md:items-center justify-between'>
                <Link to='#' className='text-white text-14 font-medium leading-100 rounded-[24px] bg-green px-[16px] py-[10px] hidden md:block'>Visit Store</Link>
                <div className='flex gap-[14px]'>
                    <div className='flex items-center gap-[6px]'>
                        <svg width="18" height="18">
                            <use href={`${sprite}#star`}></use>
                        </svg>
                        <span className='text-14 font-medium leading-128 text-heading'>{item.rating}</span>
                    </div>
                    <span
                        className={`px-[16px] py-[8px] text-12 font-bold leading-150 uppercase rounded-[8px] ${item.status === 'open' ? 'bg-greenAlpha text-green' : 'bg-redAlpha text-red'}`}>
                    {item.status}
                    </span>
                </div>
            </div>

            <div className='absolute top-[115px] md:top-[-15px] right-[110px] rotate-[22deg] '>
                <div className='w-[166px] h-[35px] rounded-[20px] bottom-[-76px] left-[25px]  absolute bg-greenAlphaLight'></div>
                <div className='w-[166px] h-[35px] rounded-[20px] absolute bg-greenAlphaLight'></div>
                <div className='w-[166px] h-[35px] rounded-[20px] left-[25px] top-[-41px] absolute bg-greenAlphaLight'></div>
            </div>
        </li>
    )
}
