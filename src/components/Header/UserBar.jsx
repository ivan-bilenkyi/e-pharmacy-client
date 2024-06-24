import {Link} from "react-router-dom";

export const UserBar = () => {
    return (
        <div className='flex items-center gap-14 ml-auto'>
            <Link to='/register' className='py-4 px-9 rounded-60 border border-grayAlpha text-subText'>Register</Link>
            <Link to='/login' className='underline text-subText'>Login</Link>
        </div>
    )
}