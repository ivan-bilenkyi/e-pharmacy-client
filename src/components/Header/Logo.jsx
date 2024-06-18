import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import logoMobile from "../../assets/logo-mobile.png";
import logoMobileWhite from "../../assets/logo-mobile-white.png";
import logo from "../../assets/logo.png";
import logoWhite from "../../assets/logo-white.png";
import logoWhite2x from "../../assets/logo-white_2x.webp";
import logoMobileWhite2x from "../../assets/logo-mobile-white_2x.webp";
import logo2x from "../../assets/logo_2x.webp";
import logoMobile2x from "../../assets/logo-mobile_2x.webp";


export const Logo = () => {
    const location = useLocation();
    const [deviceType, setDeviceType] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setDeviceType(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const isHomePage = location.pathname === "/";
    const isMobile = deviceType < '768';

    const getImageSources = () => {
        if (isHomePage) {
            return isMobile
                ? { default: logoMobileWhite, retina: logoMobileWhite2x }
                : { default: logoWhite, retina: logoWhite2x };
        } else {
            return isMobile
                ? { default: logoMobile, retina: logoMobile2x }
                : { default: logo, retina: logo2x };
        }
    };

    const { default: defaultSrc, retina: retinaSrc } = getImageSources();

    return (
        <Link to="/" className="flex gap-3.5 items-center">
            <picture>
                <source srcSet={`${retinaSrc} 2x`}/>
                <img src={defaultSrc} alt="Logo"/>
            </picture>
            <h2 className={isHomePage ? "text-white text-lg font-normal" : "dark text-lg font-normal"}>
                E-Pharmacy
            </h2></Link>
    );
};
