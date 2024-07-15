import {Link} from "react-router-dom";
import promoMobile from '../../assets/promo/promo-mobile.png';
import promoMobile2x from '../../assets/promo/promo-mobile2x.png';
import promoTablet from '../../assets/promo/promo-tablet.png';
import promoTablet2x from '../../assets/promo/promo-tablet2x.png'
import sprite from '../../assets/sprite.svg'


export const AddPharmacyPromo = () => {
    const featuresText = ['Take user orders form online', 'Create your shop profile', 'Manage your store', 'Get more orders', 'Storage shed']

    return (
        <section>
            <div className='px-20 py-40 md:px-[32px]  flex flex-col items-center'>
                <div
                    className='w-[335px] md:w-[704px] lg:w-[1248px] bg-green rounded-[32px] p-20 md:py-[40px] md:px-[48px] lg:p-[40px] lg:pl-[80px] lg:flex-row  text-subText flex flex-col gap-[19px]'>
                    <div>
                        <h2 className='text-28 leading-114 md:text-48 font-bold mb-[20px] md:mt-[64px] md:mb-[24px] text-subText'>Add the medicines you need online
                            now</h2>
                        <p className='text-14 leading-128 mb-[40px] md:text-16 md:leading-125 font-normal text-subText md:w-[488px]'>
                            Enjoy the convenience of having your prescriptions filled from home by connecting with
                            your
                            community pharmacy through our online platform.
                        </p>
                        <Link to='/medicine-store'
                              className='inline-block px-[32px] py-[13px] mb-[20px] md:mb-[64px] rounded-60 border border-grayAlpha text-14 leading-128 text-subText'>Buy
                            medicine</Link>
                    </div>
                    <div className='flex-shrink-0'>
                        <picture>
                            <source
                                media="(min-width: 768px)"
                                srcSet={`${promoTablet} 1x, ${promoTablet2x} 2x`}
                            />
                            <source
                                media="(max-width: 767px)"
                                srcSet={`${promoMobile} 1x, ${promoMobile2x} 2x`}
                            />
                            <img
                                src={promoMobile}
                                alt="Hero"
                                className=""
                            />
                        </picture>
                    </div>
                </div>
            </div>
            <div className='flex items-center overflow-hidden'>
                <ul className='flex items-center lg:m-auto gap-[43px] lg:gap-[48px]'>
                    {featuresText.map((el, index) => {
                        return (
                            <li key={index}
                                className='flex items-center gap-[8px] text-14 leading-128 font-bold text-heading whitespace-nowrap'>
                                <svg width="20" height="20">
                                    <use href={`${sprite}#lightning`}></use>
                                </svg>
                                <h3>{el}</h3>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}