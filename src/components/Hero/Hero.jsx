import heroMobile from "../../assets/hero/Hero-mobile.png"
import heroMobile2x from "../../assets/hero/Hero-mobile_2x.png"
import heroTablet from "../../assets/hero/Hero-tablet.png"
import heroTablet2x from "../../assets/hero/Hero-tablet_2x.png"
import heroDesc from "../../assets/hero/Hero-desc.png"
import heroDesc2x from "../../assets/hero/Hero-desc_2x.png"

export const Hero = () => {
    return (
        <section className="bg-green flex items-center justify-center" style={{height: 'calc(100vh - 114px)'}}>
            <div className='relative'>
                <picture>
                    <source
                        media="(min-width: 1440px)"
                        srcSet={`${heroDesc} 1x, ${heroDesc2x} 2x`}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={`${heroTablet} 1x, ${heroTablet2x} 2x`}
                    />
                    <source
                        media="(max-width: 767px)"
                        srcSet={`${heroMobile} 1x, ${heroMobile2x} 2x`}
                    />
                    <img
                        src={heroMobile}
                        alt="Hero"
                        className="w-[331px] h-[312px] sm:w-[704px] sm:h-[508px] md:w-[704px] md:h-[508px]"
                    />
                </picture>
                <div className='absolute top-0 left-0 text-white py-36 px-14 flex flex-col sm:w-[331px] md:w-[610px] md:left-[31px]'>
                    <h1 className='font-bold text-50 md:text-74 leading-100 mb-24'>Your medication delivered</h1>
                    <p className='inline-block mr-[19px] ml-auto text-12 leading-133 md:text-16 md:leading-125'>Say goodbye to all your <br/> healthcare worries with us</p>
                </div>
            </div>
        </section>
    )
}