import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header.jsx';
import {Footer} from "./Footer/Footer.jsx";

export const AppLayout = () => {

    return (
        <div>
            <Header/>
            <main>
                <Suspense fallback={<div>Loading...</div>}>
                    <Outlet />
                </Suspense>
            </main>
            <Footer/>
        </div>
    );
};
