import React, {useEffect, useState} from 'react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import axios from "axios";
import {placeOrder, updateCart} from "../redux/auth/operations.js";
import sprite from "../assets/sprite.svg";

const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: ''
};

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email format').required('Required'),
    phone: Yup.number().required('Required'),
    address: Yup.string().required('Required'),
    paymentMethod: Yup.string().required('Required')
});

export default function Cart() {
    const dispatch = useDispatch();
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(null)

    useEffect(() => {
        const fetchShoppingCarts = async () => {
            try {
                const { data } = await axios.get('/cart');
                const total = data.reduce((sum, { quantity, price }) => sum + quantity * price, 0);
                setProducts(data);
                setTotalPrice(total.toFixed(2));
            } catch (e) {
                console.log(e);
            }
        }

        fetchShoppingCarts();
    }, []);

    const addQuantity = async (id) => {
        try {
            await dispatch(updateCart({ quantity: 1, productId: id }));
            const { data } = await axios.get('/cart');
            const total = data.reduce((sum, { quantity, price }) => sum + quantity * price, 0);
            setProducts(data);
            setTotalPrice(total.toFixed(2));
        } catch (error) {
            console.log(error);
        }
    };

    const minusQuantity = async (id) => {
        try {
            await dispatch(updateCart({ quantity: -1, productId: id }));
            const { data } = await axios.get('/cart');
            const total = data.reduce((sum, { quantity, price }) => sum + quantity * price, 0);
            setProducts(data);
            setTotalPrice(total.toFixed(2));
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = async (values, { resetForm }) => {
        if (!products.length) {
            return
        }
        const order = {
            ...values,
            products: products.map(product => ({
                name: product.name,
                quantity: product.quantity
            }))
        };
        await dispatch(placeOrder(order))
        setProducts([]);
        setTotalPrice(null);
        resetForm();
    };

    const deleteCart = async (id) => {
        try {
            await dispatch(updateCart({ quantity: 0, productId: id }));
            const { data } = await axios.get('/cart');
            const total = data.reduce((sum, { quantity, price }) => sum + quantity * price, 0);
            setProducts(data);
            setTotalPrice(total.toFixed(2));
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <section className='px-[20px] pb-[80px] md:px-[32px] lg:px-[128px] lg:pb-[120px]'>
            <h2 className='mb-[40px] text-heading text-28 font-bold leading-114'>Cart</h2>
            <div className='lg:flex lg:gap-[98px]'>
                <div
                    className='bg-white rounded-[27px] p-[20px] pb-[40px] mb-[80px] lg:mb-0 md:py-[40px] md:px-[78px] lg:p-[40px] lg:w-[628px]'>
                    <h3 className='text-heading text-16 md:text-20 font-bold leading-140 mb-[12px]'>Enter shipping
                        info </h3>
                    <p className='text-topText text-14 md:text-16 font-normal leading-128 mb-[40px]'>Enter your delivery
                        address where
                        you get the product. You can also send any other location where you send the products.</p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={onSubmit}
                    >
                        {({resetForm}) => (
                            <Form className="">
                                <div
                                    className='flex flex-col md:flex-row flex-wrap gap-[12px] md:gap-x-[12px] md:gap-y-[20px] lg:mb-[62px] lg:gap-x-[14px] mb-[40px] text-12 leading-150'>
                                    {['name', 'email', 'phone', 'address'].map((field) => (
                                        <div key={field} className='relative w-full md:w-[260px]'>
                                            <label
                                                className="block mb-[8px] text-heading text-14 font-bold leading-128 ml-[18px] capitalize">
                                                {field}
                                            </label>
                                            <Field
                                                type={field === 'email' ? 'email' : 'text'}
                                                name={field}
                                                placeholder={`Enter ${field}`}
                                                className="rounded-60 border border-darkAlpha focus:border-blue-500 px-18 py-[12px] w-full"
                                            />
                                            <ErrorMessage name="paymentMethod" component="div"
                                                          style={{ color: 'red', fontSize: '12px', position: 'absolute' }}/>
                                        </div>
                                    ))}
                                </div>
                                <hr className='bg-darkAlpha10 mb-[40px]'/>
                                <h3 className='text-heading text-16 md:text-20 font-bold leading-140 mb-[12px]'>Payment
                                    method</h3>
                                <p className='text-topText text-14 md:text-16 font-normal leading-128 mb-[40px]'>
                                    You can pay us in multiple ways in our payment gateway system.
                                </p>
                                <div role="group" aria-labelledby="paymentMethod"
                                     className='flex flex-col gap-[8px] mb-[40px] relative'>
                                    {['Cash On Delivery', 'Bank'].map((method) => (
                                        <label key={method} className='flex items-center gap-[8px]'>
                                            <Field type="radio" name="paymentMethod" value={method}/>
                                            <span>{method}</span>
                                        </label>
                                    ))}
                                    <ErrorMessage name="paymentMethod" component="div"
                                                  style={{ color: 'red', fontSize: '12px', position: 'absolute', top: '-12px' }}/>
                                </div>
                                <hr className='bg-darkAlpha10 mb-[40px]'/>
                                <h3 className='text-heading text-16 md:text-20 font-bold leading-140 mb-[12px]'>Order
                                    details</h3>
                                <p className='text-topText text-14 md:text-16 font-normal leading-128 mb-[40px]'>
                                    Shipping and additional costs are calculated based on values you have entered.
                                </p>
                                <div
                                    className='rounded-[8px] w-[100%] py-[14px] px-[18px] bg-lightGreen flex justify-between font-bold text-18 leading-140 text-heading mb-[20px]'>
                                    <p>Total:</p>
                                    <p>৳ {totalPrice}</p>
                                </div>
                                <button type="submit"
                                        className="py-13 px-[32px] text-white bg-green rounded-60 hover:bg-hoverButton block">
                                    Place order
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
                <div className='lg:flex-grow lg:pt-[40px]'>
                    {products ? (
                        <ul>
                            {products.map((product, index) => (
                                <React.Fragment key={product.id}>
                                    <li className='flex gap-[12px] md:gap-[20px]'>
                                        <div
                                            className='w-[120px] h-[120px] md:w-[122px] md:h-[133px] rounded-[27px] border-[1.55px] border-subText overflow-hidden flex-shrink-0'>
                                            <img src={product.photo} alt={product.name}
                                                 className='md:w-[122px] md:h-[133px]'/>
                                        </div>
                                        <div className='md:w-full md:flex md:flex-col md:justify-between'>
                                            <div className='mb-[15px] md:flex'>
                                                <div>
                                                    <h3 className='text-heading text-16 md:text-18 font-bold leading-140 mb-[8px]'>{product.name}</h3>
                                                    <p className='text-topText text-12 md:text-14 md:leading-128 font-normal leading-116 mb-[12px]'>{product.suppliers}</p>
                                                </div>
                                                <span
                                                    className='text-heading text-12 md:text-14 md:leading-128 font-medium leading-116 md:ml-auto'>৳{product.price}</span>
                                            </div>
                                            <div className='flex items-center gap-[19px] md:justify-between'>
                                                <div
                                                    className='rounded-[60px] border-[1px] border-darkAlpha10 inline-flex items-center gap-[12px] py-[5.5px] px-[14px] md:py-[12px] md:px-[18px]'>
                                                    <button
                                                        onClick={() => addQuantity(product.id)}
                                                        disabled={product.stock === product.quantity}
                                                    >
                                                        <svg className='w-[18px] h-[18px]'>
                                                            <use href={`${sprite}#plus`}></use>
                                                        </svg>
                                                    </button>
                                                    <span
                                                        className='text-heading text-14 font-normal leading-142'>{product.quantity}</span>
                                                    <button
                                                        onClick={() => minusQuantity(product.id)}
                                                        disabled={product.quantity <= 1}
                                                    >
                                                        <svg className='w-[18px] h-[18px]'>
                                                            <use href={`${sprite}#minus`}></use>
                                                        </svg>
                                                    </button>
                                                </div>
                                                <button
                                                    onClick={() => deleteCart(product.id)}
                                                    className='px-[12px] py-[8px] md:mt-auto text-14 font-medium leading-114 rounded-[40px] text-red bg-redAlpha hover:bg-red hover:text-white'
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </li>
                                    {index < products.length - 1 && <hr className='mt-[20px] mb-[20px]'/>}
                                </React.Fragment>
                            ))}
                        </ul>
                    ) : (
                        <div>No products available</div>
                    )}
                </div>
            </div>
        </section>
    )
}
