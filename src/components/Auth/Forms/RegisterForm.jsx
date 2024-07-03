import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations.js';
import { Link } from 'react-router-dom';
import MaskedInput from 'react-text-mask';

export const RegisterForm = () => {
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email format').required('Required'),
        phone: Yup.string().matches(/^\+380\d{2}-\d{3}-\d{2}-\d{2}$/, 'Required').required('Required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters long').required('Required'),
    });

    const initialValues = {
        name: '',
        email: '',
        phone: '+380__-___-__-__',
        password: '',
    };

    const onSubmit = (values) => {
        console.log(values);
        dispatch(register(values));
    };

    return (
        <div>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form className="mt-[78px]">
                    <div className='flex flex-col lg:flex-row flex-wrap gap-[10px] lg:mb-[62px] mb-[20px] text-12 leading-150'>
                        <div className='relative'>
                            <Field
                                type="text"
                                name="name"
                                placeholder="User name"
                                className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-[12px] w-full"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-xs absolute" />
                        </div>

                        <div className='relative'>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email address"
                                className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13 w-full"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs absolute" />
                        </div>

                        <div className='relative'>
                            <Field name="phone">
                                {({ field }) => (
                                    <MaskedInput
                                        {...field}
                                        mask={['+', '3', '8', '0', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                                        className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13 w-full"
                                        placeholder='+380__-___-__-__'
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-xs absolute" />
                        </div>

                        <div className='relative'>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13 w-full"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs absolute" />
                        </div>
                    </div>

                    <div className='inline-flex flex-col items-center gap-14 w-full'>
                        <button type="submit" className="lg:w-[280px] py-13 px-4 text-white bg-green rounded-60 hover:bg-hoverButton w-full">
                            Register
                        </button>
                        <Link to='/login' className='text-12 leading-150 text-darkAlpha items-center'>Already have an account?</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};
