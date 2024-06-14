import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const AppLayout = () => {
    return (
        <div>
            <main>
                <Suspense fallback={<></>}>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};