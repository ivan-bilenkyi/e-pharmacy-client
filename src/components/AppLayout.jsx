import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';

export const AppLayout = () => {

    return (
        <div>
            <Header/>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};
