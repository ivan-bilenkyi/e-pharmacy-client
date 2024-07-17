import pill from "../../assets/auth/pill.png"
import pill2x from "../../assets/auth/pill_2x.png"
import pillMobile from "../../assets/auth/pill-mobile.png"
import pillMobile2x from "../../assets/auth/pill-mobile_2x.png"

export const AuthTitle = () => {
    return (
        <div className='relative pt-78 md:pt-[144px] lg:pt-0 sm:w-[332px] md:w-[614px] shrink-0 lg:ml-[65px]'>
            <picture>
                <source
                    media="(min-width: 768px)"
                    srcSet={`${pill} 1x, ${pill2x} 2x`}
                />
                <source
                    media="(max-width: 767px)"
                    srcSet={`${pillMobile} 1x, ${pillMobile2x} 2x`}
                />
                <img
                    src={pillMobile}
                    alt="pill"
                    className="absolute right-[20px] top-[5px] lg:top-[-107px]"
                />
            </picture>
            <h1 className='font-bold text-28 leading-82 md:text-54 md:leading-111 md:mb-[54px] lg:mb-0'>Your medication,<br/> delivered Say goodbye to all <span className='text-green'>your healthcare</span> worries with us</h1>
        </div>
    )
}