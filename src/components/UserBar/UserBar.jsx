import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoggedIn, selectUser} from "../../redux/auth/selectors.js";
import sprite from '../../assets/sprite.svg'
import {logOut} from "../../redux/auth/operations.js";

export const UserBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    const { name } = useSelector(selectUser);
    const firstLetterName = name?.charAt(0);
    const { pathname} = useLocation();

    const handleLogOut = () => {
        dispatch(logOut())
    }

    return (
        !isLoggedIn ? (
            <div className='items-center gap-14 hidden lg:flex'>
                <Link to='/register'
                      className={`py-4 px-9 rounded-60 border border-text ${pathname === '/' ? 'text-subText' : 'text-text'}`}>
                    Register
                </Link>
                <Link to='/login' className={`underline ${pathname === '/' ? 'text-subText' : 'text-text'}`}>
                    Login
                </Link>
            </div>
        ) : (
            <div className=' gap-[10px] items-center hidden lg:flex'>
                <div className='w-[44px] h-[44px] p-14 rounded-50 bg-white relative cursor-pointer'>
                    <svg width="16px" height="16px">
                        <use href={`${sprite}#shopping-cart`}></use>
                    </svg>
                    <div className='bg-lightGreen rounded-50 absolute top-[-2px] right-[-1px] h-[16px] w-[16px] flex items-center justify-center'>
                        <span className='text-12 font-bold text-green'>0</span>
                    </div>
                </div>
                <div className='flex gap-[12px] items-center'>
                    <div className='bg-lightGreen w-[44px] h-[44px] rounded-50 flex items-center justify-center'>
                        <span className='text-18 font-bold text-green leading-140 uppercase'>{firstLetterName}</span>
                    </div>
                    <button
                        className={`${
                            pathname === '/' ? 'text-subText' : 'text-green'
                        } rounded-60 border border-grayAlpha50 px-[32px] py-[16px]`}
                        onClick={handleLogOut}
                    >
                        Log out
                    </button>
                </div>

            </div>
        )
    );
};
