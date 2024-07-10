import {Logo} from "./Logo.jsx";
import {NavBar} from "../NavBar/NavBar.jsx";
import {UserBar} from "../UserBar/UserBar.jsx";
import {useLocation} from "react-router-dom";
import {BurgerMenu} from "../BergerMenu/BurgerMenu.jsx";

export default function Header () {
    const { pathname } = useLocation();
    const isHomePage = pathname === "/";
    const isAuthPage = pathname === "/register" || pathname === "/login";

    return (
        <header className={isHomePage ? "bg-green  py-7 px-5" : "bg-background  py-7 px-5"}>
            <div className='lg:w-[1248px] md:w-[704px] m-auto flex items-center justify-between'>
                <Logo/>
                {!isAuthPage && (
                    <>
                        <NavBar />
                        <UserBar />
                    </>
                )}
                <BurgerMenu/>
            </div>
        </header>
    )
}