import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <nav>
            <ul className='flex items-center gap-px'>
                <li className='bg-white rounded-60 border border-borderNavLink p-2 text-text'>
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? 'bg-green rounded-60 text-white py-2 px-5 block' : 'block py-2 px-5'
                    }>
                        Home
                    </NavLink>
                </li>
                <li className='bg-white rounded-60 border border-borderNavLink p-2 text-text'>
                    <NavLink
                        to='/medicine-store'
                        className={({ isActive }) =>
                            isActive ? 'bg-green rounded-60 text-white py-2 px-5 block' : 'block py-2 px-5'
                        }
                    >
                        Medicine Store
                    </NavLink>
                </li>
                <li className='bg-white rounded-60 border border-borderNavLink p-2 text-text'>
                    <NavLink to='/medicine'  className={({ isActive }) =>
                        isActive ? 'bg-green rounded-60 text-white py-2 px-5 block' : 'block py-2 px-5'
                    }>
                        Medicine
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};
