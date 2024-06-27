import logoMobileWhite from "../../assets/logo/logo-mobile-white.png";
import logoWhite from "../../assets/logo/logo-white.png";
import logoWhite2x from "../../assets/logo/logo-white_2x.webp";
import logoMobileWhite2x from "../../assets/logo/logo-mobile-white_2x.webp";
import {Link} from "react-router-dom";

export const Logo = () => {
    return (
        <Link to="/" className="flex gap-3.5 items-center mb-[20px]">
            <picture>
                <source
                    media="(min-width: 768px)"
                    srcSet={`${logoWhite} 1x, ${logoWhite2x} 2x`}
                />
                <source
                    media="(max-width: 767px)"
                    srcSet={`${logoMobileWhite} 1x, ${logoMobileWhite2x} 2x`}
                />
                <img
                    src={logoMobileWhite}
                    alt="logo"
                    className=""
                />
            </picture>
            <h2 className='text-white font-bold text-20'>
                E-Pharmacy
            </h2>
        </Link>
    )
}