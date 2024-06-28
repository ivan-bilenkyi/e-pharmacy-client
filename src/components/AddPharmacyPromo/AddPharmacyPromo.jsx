import {Link} from "react-router-dom";
import promoMobile from '../../assets/promo/promo-mobile.png';
import promoMobile2x from '../../assets/promo/promo-mobile2x.png';
import promoTablet from '../../assets/promo/promo-tablet.png';
import promoTablet2x from '../../assets/promo/promo-tablet2x.png'


export const AddPharmacyPromo = () => {
    return (
        <section className='px-20 py-40 md:px-[32px]'>
            <div className='w-[335px] md:w-[704px] bg-green rounded-[32px] p-20 md:py-[40px] md:px-[48px] text-subText flex flex-col gap-[19px]'>
                <div>
                    <h2 className='text-28 leading-114 font-bold mb-[20px]'>Add the medicines you need online now</h2>
                    <p className='text-14 leading-128 mb-[40px]'>
                        Enjoy the convenience of having your prescriptions filled from home by connecting with your
                        community pharmacy through our online platform.
                    </p>
                    <Link to='/medicine-store' className='inline-block px-[32px] py-[13px] mb-[20px] rounded-60 border border-grayAlpha text-14 leading-128 text-subText'>Buy medicine</Link>
                </div>
                <div>
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
        </section>
    )
}