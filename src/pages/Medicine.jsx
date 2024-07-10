import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "../redux/products/selectors.js";
import { useEffect, useState } from "react";
import { getProducts } from "../redux/products/operations.js";
import { selectIsLoggedIn } from "../redux/auth/selectors.js";
import { updateCart } from "../redux/cart/operations.js";
import {Modal} from "../components/Modal/Modal.jsx";
import {ModalRegisterForm} from "../components/Auth/Forms/ModalRegisterForm.jsx";
import {ModalLoginForm} from "../components/Auth/Forms/ModalLoginForm.jsx";
import {Link} from "react-router-dom";

export default function Medicine () {
    const products = useSelector(selectProducts);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const toAddToCart = async id => {
        if (isLoggedIn) {
            await dispatch(updateCart({ quantity: 1, productId: id }));
        } else {
            setIsModalOpen(true);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openLoginForm = (value) => {
        setIsLoginForm(value);
    };

    return (
        <section className='pb-[80px] pt-[31px] px-[20px] md:px-[32px]'>
            <div className='lg:w-[1248px] md:w-[704px] m-auto'>
                <h2 className='mb-[40px] text-28 leading-114 font-bold text-heading'>Medicine</h2>
                <ul className='flex flex-wrap md:gap-x-[8px] md:gap-y-[32px] gap-[20px] lg:gap-x-[21px] lg:gap-y-[40px]'>
                    {products.products?.map(item => (
                        <li key={item._id} className='flex flex-col gap-[8px] w-[335px] md:w-[229px] lg:w-[280px]'>
                            <div className='rounded-[20px] border-[1.55px] border-greenAlpha60 overflow-hidden'>
                                <img src={item.photo} alt={item.name} className='w-full h-[300px] md:h-[260px] lg:h-[280px]' />
                            </div>
                            <div className='bg-white rounded-[20px] p-20'>
                                <div className='mb-[17px]'>
                                    <div className='flex justify-between items-center mb-[4px]'>
                                        <h3 className='text-16 md:text-18 leading-140 font-bold text-heading'>{item.name}</h3>
                                        <p className='text-16 md:text-18 leading-140 font-bold text-heading'>৳{item.price}</p>
                                    </div>
                                    <p className='text-12 font-normal leading-150 text-darAlpha60'>{item.suppliers}</p>
                                </div>
                                <div className='flex items-center justify-between'>
                                    <button
                                        onClick={() => toAddToCart(item._id)}
                                        className='bg-green text-white text-14 leading-100 font-medium px-[16px] py-[10px] rounded-[24px]'>
                                        Add to cart
                                    </button>
                                    <Link to={{pathname: '/product', state: { item } }}
                                        className='text-heading underline leading-150 text-12 font-normal'>
                                        Details
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {isLoginForm ? <ModalLoginForm openLoginForm={openLoginForm} onClose={closeModal}/> : <ModalRegisterForm openLoginForm={openLoginForm} onClose={closeModal}/>}
            </Modal>
        </section>
    );
}
