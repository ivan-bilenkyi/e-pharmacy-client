import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav className='hidden lg:block'>
            <ul className='flex items-center gap-[2px]'>
                <li className='bg-white rounded-60 border border-borderNavLink p-2 text-text relative'>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? 'bg-green rounded-60 text-white py-2 px-5 block' : 'block py-2 px-5'
                    }>
                        Home
                    </NavLink>
                    <div className='absolute right-[-5px] bottom-[20px] w-[6px] h-[15px] bg-white border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px] border-t-borderNavLink border-b-borderNavLink border-l-white border-r-white z-[1]'></div>
                </li>
                <li className='bg-white rounded-60 border border-borderNavLink p-2 text-text relative'>
                    <NavLink
                        to='/medicine-store'
                        className={({isActive}) =>
                            isActive ? 'bg-green rounded-60 text-white py-2 px-5 block' : 'block py-2 px-5'
                        }
                    >
                        Medicine Store
                    </NavLink>
                    <div
                        className='absolute right-[-5px] bottom-[20px] w-[6px] h-[15px] bg-white border-t-[1px] border-b-[1px] border-l-[1px] border-r-[1px] border-t-borderNavLink border-b-borderNavLink border-l-white border-r-white'></div>
                </li>
                <li className='bg-white rounded-60 border border-borderNavLink p-2 text-text'>
                    <NavLink to='/medicine' className={({isActive}) =>
                        isActive ? 'bg-green rounded-60 text-white py-2 px-5 block' : 'block py-2 px-5'
                    }>
                        Medicine
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
