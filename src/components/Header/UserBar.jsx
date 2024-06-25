import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

export const UserBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        !isLoggedIn ? (
            <div className='flex items-center gap-14'>
                <Link to='/register' className='py-4 px-9 rounded-60 border border-grayAlpha text-subText'>Register</Link>
                <Link to='/login' className='underline text-subText'>Login</Link>
            </div>
        ) : (
            <div>
                user
            </div>
        )
    );
};
