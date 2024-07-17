import {Navigate, Route, Routes} from "react-router-dom";
import {lazy, useEffect} from "react";
import {AppLayout} from "./components/AppLayout.jsx";
import RestrictedRoute from "./components/RestrictedRoute.jsx";
import { refreshUser } from "./redux/auth/operations.js";
import { useDispatch } from "react-redux";
import PrivateRoute from "./components/PrivateRoute.jsx";

const Home = lazy(() => import('./pages/Home.jsx'));
const MedicineStore = lazy(() => import('./pages/MedicineStore.jsx'));
const Medicine = lazy(() => import('./pages/Medicine.jsx'))
const Register = lazy(() => import('./pages/Register.jsx'))
const Login = lazy(() => import('./pages/Login.jsx'))
const Product = lazy(() => import('./pages/Product.jsx'))
const Cart = lazy(() => import('./pages/Cart.jsx'))


export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(refreshUser());
    }, []);

    return (
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Home />} />
                <Route
                    path="/register"
                    element={<RestrictedRoute component={<Register />} redirectTo="/" />}
                />
                <Route
                    path="/login"
                    element={<RestrictedRoute component={<Login />} redirectTo="/" />}
                />
                <Route path="/cart" element={<PrivateRoute component={<Cart/>} redirectTo="/login" />} />
                <Route path='/medicine-store' element={<MedicineStore />} />
                <Route path='/medicine' element={<Medicine />} />
                <Route path='/product' element={<Product />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Route>
        </Routes>
    )
}