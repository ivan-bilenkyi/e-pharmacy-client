import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import sprite from "../assets/sprite.svg";
import {updateCart} from "../redux/auth/operations.js";
import {useDispatch, useSelector} from "react-redux";
import {selectIsLoggedIn} from "../redux/auth/selectors.js";
import {ModalLoginForm} from "../components/Auth/Forms/ModalLoginForm.jsx";
import {ModalRegisterForm} from "../components/Auth/Forms/ModalRegisterForm.jsx";
import {Modal} from "../components/Modal/Modal.jsx";
import {Description} from "../components/Description/Description.jsx";
import {CartReviews} from "../components/CartReviews/CartReviews.jsx";

export default function Product() {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const { item } = location.state || {};
    const [product, setProduct] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if (!item) {
            navigate('/medicine');
        } else {
            setProduct({ ...item, quantity: 1 });
            setTotalPrice(item.price);
        }
    }, [item, navigate]);

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        const newTotalPrice = product.price * newQuantity;

        setQuantity(newQuantity);
        setTotalPrice(newTotalPrice);

        setProduct((prevProduct) => ({
            ...prevProduct,
            quantity: newQuantity,
        }));
    };

    const minusQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            const newTotalPrice = product.price * newQuantity;

            setQuantity(newQuantity);
            setTotalPrice(newTotalPrice);

            setProduct((prevProduct) => ({
                ...prevProduct,
                quantity: newQuantity,
            }));
        }
    };

    const toAddToBasket = async (id) => {
        if (isLoggedIn) {
            await dispatch(updateCart({ quantity: quantity, productId: id }));
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

    const activeButton = () => {
        setIsActive(!isActive)
    }

    return (
        <section className='pb-[80px] pt-[31px] px-[20px] md:px-[32px]'>
            <div className='flex flex-col gap-[8px] md:gap-[16px] lg:flex-row'>
                <div className='flex flex-col md:flex-row gap-[8px] md:gap-[16px] lg:flex-col'>
                    <div
                        className='w-[335px] h-[337px] md:w-[364px] md:h-[284px] lg:h-[337px] rounded-[27px] border-[1.55px] border-subText overflow-hidden flex-shrink-0'>
                        <img className='w-full h-auto' src={product.photo} alt={product.name}/>
                    </div>
                    <div className='w-full md:w-[324px] lg:w-[364px] bg-white rounded-[20px] p-[20px] md:p-[32px] md:flex md:justify-between md:flex-col'>
                        <div className='mb-[15px] flex justify-between md:flex-col lg:flex-row'>
                            <div className='md:mb-[32px]'>
                                <h3 className='text-heading text-16 md:text-18 font-bold leading-140 mb-[8px]'>{product.name}</h3>
                                <p className='text-topText text-12 md:text-14 md:leading-128 font-normal leading-116 mb-[12px]'>{product.suppliers}</p>
                            </div>
                            <span className='text-heading text-16 font-medium leading-140'>₴{totalPrice}</span>
                        </div>
                        <div className='flex items-center gap-[19px] justify-between'>
                            <div
                                className='rounded-[60px] border-[1px] border-darkAlpha10 inline-flex items-center gap-[12px] py-[11px] px-[18px]'>
                                <button
                                    onClick={addQuantity}
                                    disabled={product.stock === quantity}
                                >
                                    <svg className='w-[18px] h-[18px]'>
                                        <use href={`${sprite}#plus`}></use>
                                    </svg>
                                </button>
                                <span className='text-heading text-14 font-normal leading-142'>{quantity}</span>
                                <button
                                    onClick={minusQuantity}
                                    disabled={quantity <= 1}
                                >
                                    <svg className='w-[18px] h-[18px]'>
                                        <use href={`${sprite}#minus`}></use>
                                    </svg>
                                </button>
                            </div>
                            <button
                                onClick={() => toAddToBasket(product._id)}
                                className='bg-green text-white text-14 leading-128 font-medium px-[18px] py-[13px] rounded-[24px]'>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                <div className='bg-white p-[20px] md:p-[32px] lg:p-[40px] md:pb-[70px] lg:pb-[66px] rounded-[27px] lg:rounded-[20px]'>
                    <div className='flex gap-[8px] mb-[20px]'>
                        <button
                            type='button'
                            disabled={!isActive}
                            onClick={activeButton}
                            className={`py-[8px] px-[25px] rounded-[40px] ${!isActive ? 'text-white bg-green' : 'text-green bg-greenAlpha'}`}>Description</button>
                        <button
                            type='button'
                            disabled={isActive}
                            onClick={activeButton}
                            className={`py-[8px] px-[25px] rounded-[40px] ${isActive ? 'text-white bg-green' : 'text-green bg-greenAlpha'}`}>Reviews</button>
                    </div>
                    {!isActive ? <Description/> : <CartReviews/>}
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                {isLoginForm ? <ModalLoginForm openLoginForm={openLoginForm} onClose={closeModal}/> :
                    <ModalRegisterForm openLoginForm={openLoginForm} onClose={closeModal}/>}
            </Modal>
        </section>
    );
}
