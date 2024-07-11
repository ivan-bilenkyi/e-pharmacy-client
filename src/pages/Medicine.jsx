import {  useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { selectIsLoggedIn } from "../redux/auth/selectors.js";
import { Modal } from "../components/Modal/Modal.jsx";
import { ModalRegisterForm } from "../components/Auth/Forms/ModalRegisterForm.jsx";
import { ModalLoginForm } from "../components/Auth/Forms/ModalLoginForm.jsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import sprite from '../assets/sprite.svg';
import axios from "axios";

const validationSchema = Yup.object({
    keyword: Yup.string(),
    category: Yup.string(),
});

export default function Medicine() {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const history = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialCategory = searchParams.get('category') || '';
    const initialKeyword = searchParams.get('keyword') || '';

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedCategories = await axios.get('/products/categories');
                setCategories(fetchedCategories.data);

                const { data } = await axios.get(`/products?category=${initialCategory}&keyword=${initialKeyword}`);
                setProducts(data.products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);

    const handleChange = (e, setFieldValue) => {
        const { name, value } = e.target;
        const params = new URLSearchParams(location.search);
        params.set(name, value);
        history({
            pathname: location.pathname,
            search: `?${params.toString()}`,
        });
        setFieldValue(name, value);
    };

    const getFilteredProducts = async (values) => {
        try {
            const { data } = await axios.get(`/products?category=${values.category}&keyword=${values.keyword}`);
            setProducts(data.products);
        } catch (e) {
            console.log(e);
        }
    }

    const toAddToBasket = async (id) => {
        if (isLoggedIn) {
            // await dispatch(updateCart({ quantity: 1, productId: id }));
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
                <Formik
                    initialValues={{ keyword: initialKeyword, category: initialCategory }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        getFilteredProducts(values).then(() => {
                            setSubmitting(false);
                        });
                    }}
                >
                    {({ isSubmitting, setFieldValue }) => (
                        <Form className='flex flex-col gap-[12px] md:flex-row md:gap-[8px] mb-[40px] md:mb-[32px] lg:mb-[40px]'>
                            <div>
                                <Field
                                    as="select"
                                    name="category"
                                    className='rounded-[60px] w-[100%] md:w-[214px] h-[44px] bg-white border-[1px] border-darkAlpha10 mr-[6px] py-[13px] px-[18px] font-normal font-12 leading-150 text-darkAlpha'
                                    onChange={(e) => handleChange(e, setFieldValue)}
                                >
                                    <option value="">Product category</option>
                                    {categories.length > 0 && categories.map((category, index) => (
                                        <option key={index} value={category}>
                                            {category}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                            <div className='relative'>
                                <Field
                                    placeholder="Search medicine"
                                    type="text"
                                    name="keyword"
                                    className='rounded-[60px] w-[100%] md:w-[214px] h-[44px] bg-white border-[1px] border-darkAlpha10 mr-[6px] py-[13px] px-[18px] font-normal font-12 leading-150 text-darkAlpha'
                                    onChange={(e) => handleChange(e, setFieldValue)}
                                />
                                <svg width="16" height="16" className='absolute top-[15px] right-[20px]'>
                                    <use href={`${sprite}#search`}></use>
                                </svg>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className='rounded-[60px] py-[13px] px-[30px] h-[44px] bg-green font-medium font-14 leading-128 text-white inline-flex items-center gap-[8px] cursor-pointer'
                                >
                                    <svg width="14" height="14">
                                        <use href={`${sprite}#filter`}></use>
                                    </svg>
                                    Filter
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <ul className='flex flex-wrap md:gap-x-[8px] md:gap-y-[32px] gap-[20px] lg:gap-x-[21px] lg:gap-y-[40px]'>
                    {products?.map(item => (
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
                                        onClick={() => toAddToBasket(item._id)}
                                        className='bg-green text-white text-14 leading-100 font-medium px-[16px] py-[10px] rounded-[24px]'>
                                        Add to cart
                                    </button>
                                    <Link to={{ pathname: '/product', state: { item } }}
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
                {isLoginForm ? <ModalLoginForm openLoginForm={openLoginForm} onClose={closeModal} /> : <ModalRegisterForm openLoginForm={openLoginForm} onClose={closeModal} />}
            </Modal>
        </section>
    );
}
