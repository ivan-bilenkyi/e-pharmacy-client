import {Logo} from "./Logo.jsx";
import {NavBar} from "../NavBar/NavBar.jsx";
import {UserBar} from "./UserBar.jsx";
import {useLocation} from "react-router-dom";

export default function Header () {
    const { pathname } = useLocation();
    const isHomePage = pathname === "/";
    const isAuthPage = pathname === "/register" || pathname === "/login";

    return (
        <header className={isHomePage ? "bg-green" : "bg-white"}>
            <div className='w-1240px flex items-center justify-between py-7 px-5'>
                <Logo/>
                {!isAuthPage && <NavBar/>}
                {!isAuthPage && <UserBar/>}
            </div>
        </header>
    )
}