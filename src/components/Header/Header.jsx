import {Logo} from "./Logo.jsx";
import {NavBar} from "./NavBar.jsx";
import {UserBar} from "./UserBar.jsx";
import {useLocation} from "react-router-dom";

export default function Header () {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <header className={isHomePage ? "bg-green" : "bg-white"}>
            <div className='w-1208px flex items-center place-content-around py-7 px-5'>
                <Logo/>
                <NavBar/>
                <UserBar/>
            </div>
        </header>
    )
}