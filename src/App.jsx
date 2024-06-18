import {Route, Routes} from "react-router-dom";
import {lazy} from "react";
import {AppLayout} from "./components/AppLayout.jsx";

const Home = lazy(() => import('./pages/Home.jsx'));
const MedicineStore = lazy(() => import('./pages/MedicineStore.jsx'));
const Medicine = lazy(() => import('./pages/Medicine.jsx'))


export default function App() {
    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route path='/medicine-store' element={<MedicineStore />} />
                <Route path='/medicine' element={<Medicine />} />
            </Route>
        </Routes>
    )
}