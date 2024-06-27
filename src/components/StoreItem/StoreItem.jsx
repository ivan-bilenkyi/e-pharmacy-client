import sprite from '../../assets/sprite.svg'

export const StoreItem = ({item}) => {
    return (
        <li className='pt-[32px] pr-[32px] pl-[32px] pb-[32px] w-[335px] md:w-[344px] lg:w-[392px] bg-lightGreen rounded-[27px] border-[1.55px] border-subText flex justify-between relative overflow-hidden'>
            <div className='w-[130px] md:w-[140px]'>
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
            <div className='items-end'>
                <div className='flex items-center gap-[14px]'>
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

            <div className='absolute bottom-[90px] right-[110px] rotate-[22deg] '>
                <div className='w-[166px] h-[35px] rounded-[20px] bottom-[-76px] left-[25px]  absolute bg-greenAlphaLight'></div>
                <div className='w-[166px] h-[35px] rounded-[20px] absolute bg-greenAlphaLight'></div>
                <div className='w-[166px] h-[35px] rounded-[20px] left-[25px] top-[-41px] absolute bg-greenAlphaLight'></div>
            </div>
        </li>
    )
}

// right-[-70px] bottom-[-40px]
// right-[-50px] bottom-[1px]
// right-[-105px] bottom-[50px]