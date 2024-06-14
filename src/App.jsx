import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {AppLayout} from "./components/AppLayout.jsx";

const First = lazy(() => import('./pages/First.jsx'));
const Second = lazy(() => import('./pages/Second.jsx'));


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<First />} />
                <Route path='/second' element={<Second />} />
            </Route>
        </Routes>
    )
}