import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {useDispatch, useSelector} from "react-redux";
import {selectCarts} from "../redux/auth/selectors.js";
import {useEffect, useState} from "react";
import axios from "axios";
import {updateCart} from "../redux/auth/operations.js";
import sprite from "../assets/sprite.svg"


const initialValues = {
    name: '',
    email: '',
    phone: '',
    address: '',
};

const validationSchema = Yup.object({
    name: Yup.string().required('*'),
    email: Yup.string().email('Invalid email format').required('Required'),
    phone: Yup.number().required('Required'),
    address: Yup.string().required('Required'),
});

export default function Cart() {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchShoppingCarts = async () => {
            try {
                const {data} = await axios.get('/cart')
                setProducts(data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchShoppingCarts()
    }, []);

    const addQuantity = async (id) => {
        try {
            await dispatch(updateCart({ quantity: 1, productId: id }));

            const { data } = await axios.get('/cart');
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };

    const minusQuantity = async (id) => {
        try {
            await dispatch(updateCart({ quantity: -1, productId: id }));
            const { data } = await axios.get('/cart');
            setProducts(data);
        } catch (error) {
            console.log(error);
        }
    };
    const onSubmit = (values) => {
        console.log(values);
    };

    return (
        <section className='px-[20px] pb-[80px]'>
            <h2 className='mb-[40px] text-heading text-28 font-bold leading-114'>Cart</h2>
            <div className='bg-white rounded-[27px] p-[20px] pb-[40px] mb-[80px]' >
                <h3 className='text-heading text-16 font-bold leading-140 mb-[12px]'>Enter shipping info </h3>
                <p className='text-topText text-14 font-normal leading-128 mb-[40px]'>Enter your delivery address where you get the product. You can also send any other location where you send the products.</p>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    <Form className="">
                        <div
                            className='flex flex-col lg:flex-row flex-wrap gap-[12px] lg:mb-[62px] mb-[40px] text-12 leading-150'>
                            <div className='relative'>
                                <label
                                    className="block mb-[8px] text-heading text-14 font-bold leading-128 ml-[18px]">Name</label>
                                <Field
                                    type="text"
                                    name="name"
                                    placeholder="Enter text"
                                    className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-[12px] w-full"
                                />
                                <ErrorMessage name="name" component="span" className=" absolute"/>
                            </div>

                            <div className='relative'>
                                <label
                                    className="block mb-[8px] text-heading text-14 font-bold leading-128 ml-[18px]">Email</label>
                                <Field
                                    type="email"
                                    name="email"
                                    placeholder="Enter text"
                                    className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13 w-full"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-xs absolute"/>
                            </div>

                            <div className='relative'>
                                <label
                                    className="block mb-[8px] text-heading text-14 font-bold leading-128 ml-[18px]">Phone</label>
                                <Field
                                    type="tel"
                                    name="phone"
                                    className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13 w-full"
                                    placeholder="Enter text"
                                />

                                <ErrorMessage name="phone" component="div" className="text-red-500 text-xs absolute"/>
                            </div>

                            <div className='relative'>
                                <label
                                    className="block mb-[8px] text-heading text-14 font-bold leading-128 ml-[18px]">Address</label>
                                <Field
                                    type="address"
                                    name="address"
                                    placeholder="Enter text"
                                    className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13 w-full"
                                />
                                <ErrorMessage name="address" component="div" className="text-red-500 text-xs absolute"/>
                            </div>
                        </div>
                        <hr className='bg-darkAlpha10 mb-[40px]'/>
                        <h3 className='text-heading text-16 font-bold leading-140 mb-[12px]'>Payment method</h3>
                        <p className='text-topText text-14 font-normal leading-128 mb-[40px]'>You can pay us in a
                            multiple way in our payment gateway system.</p>
                        <div role="group" aria-labelledby="paymentMethod" className='flex flex-col gap-[8px] mb-[40px]'>
                            <label className='flex items-center gap-[8px]'>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Cash On Delivery"
                                />
                                <span>Cash On Delivery</span>
                            </label>
                            <label className='flex items-center gap-[8px]'>
                                <input
                                    type="radio"
                                    name="paymentMethod"
                                    value="Bank"
                                />
                                <span>Bank</span>
                            </label>
                        </div>
                        <hr className='bg-darkAlpha10 mb-[40px]'/>
                        <h3 className='text-heading text-16 font-bold leading-140 mb-[12px]'>Order details </h3>
                        <p className='text-topText text-14 font-normal leading-128 mb-[40px]'>Shipping and additionnal
                            costs are calculated based on values you have entered.</p>
                        <div
                            className='rounded-[8px] w-[100%] py-[14px] px-[18px] bg-lightGreen flex justify-between font-bold text-18 leading-140 text-heading mb-[20px]'>
                            <p>Total:</p>
                            <p>৳{''}</p>
                        </div>
                        <button type="submit"
                                className="py-13 px-[32px] text-white bg-green rounded-60 hover:bg-hoverButton block">
                            Place order
                        </button>
                    </Form>
                </Formik>
            </div>
            <div>
                {products ? (
                    <ul>
                        {products.map((product, index) => (
                            <React.Fragment key={product.id}>
                                <li className='flex gap-[12px]'>
                                    <div className='w-[120px] h-[120px] rounded-[27px] border-[1.55px] border-subText overflow-hidden'>
                                        <img src={product.photo} alt={product.name}/>
                                    </div>
                                    <div>
                                        <div className='mb-[15px]'>
                                            <div>
                                                <h3 className='text-heading text-16 font-bold leading-140'>{product.name}</h3>
                                                <p className='text-topText text-12 font-normal leading-116 mb-[12px]'>{product.suppliers}</p>
                                            </div>
                                            <span
                                                className='text-heading text-12 font-medium leading-116'>৳{product.price}</span>
                                        </div>
                                        <div className='flex items-center gap-[19px]'>
                                            <div
                                                className='rounded-[60px] border-[1px] border-darkAlpha10 inline-flex items-center gap-[12px] py-[5.5px] px-[14px]'>
                                                <button onClick={() => addQuantity(product.id)}>
                                                    <svg className='w-[18px] h-[18px]'>
                                                        <use href={`${sprite}#plus`}></use>
                                                    </svg>
                                                </button>
                                                <span
                                                    className='text-heading text-14 font-normal leading-142'>{product.quantity}</span>
                                                <button onClick={() => minusQuantity(product.id)}>
                                                    <svg className='w-[18px] h-[18px]'>
                                                        <use href={`${sprite}#minus`}></use>
                                                    </svg>
                                                </button>
                                            </div>
                                            <button
                                                className='px-[12px] py-[8px] text-14 font-medium leading-114 rounded-[40px] text-red bg-redAlpha'>Remove
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                {index < products.length - 1 &&
                                    <hr className='mt-[20px] mb-[20px]'/>}
                            </React.Fragment>
                        ))}
                    </ul>
                ) : (
                    <div>No products available</div>
                )}
            </div>
        </section>
    )
}
