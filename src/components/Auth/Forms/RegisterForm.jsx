import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {register} from "../../../redux/auth/operations.js";
import {Link} from "react-router-dom";

export const RegisterForm= () => {
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        name: Yup.string()
            .required('Required'),
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        phone: Yup.string()
            .matches(/^\+(?:[0-9] ?){6,14}[0-9]$/, 'Invalid phone number format')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters long')
            .required('Required'),
    });

    const initialValues = {
        name: '',
        email: '',
        phone: '',
        password: '',
    };

    const onSubmit = (values) => {
        dispatch(register(values))
    };

    return (
        <div>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            >
                <Form className="">

                    <div className='flex flex-col lg:flex-row flex-wrap gap-14 lg:mb-[62px]'>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            placeholder="User name"
                            className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13"
                        />
                        {/*<ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />*/}

                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email adress"
                            className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13"
                        />
                        {/*<ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />*/}

                        <Field
                            type="text"
                            id="phone"
                            name="phone"
                            placeholder="Phone number"
                            className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13"
                        />
                        {/*<ErrorMessage name="phone" component="div" className="text-red-500 text-sm mt-1" />*/}

                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="rounded-60 border border-darkAlpha focus:border-blue-500  lg:w-[280px] px-18 py-13"
                        />
                        {/*<ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />*/}
                    </div>

                    <div className='inline-flex flex-col items-center gap-14'>
                        <button type="submit"
                                className="lg:w-[280px] py-13 px-4 text-white bg-green rounded-60 hover:bg-hoverButton">Register
                        </button>
                        <Link to='/login' className='text-12 leading-150 text-darkAlpha items-center'>Already have an account?</Link>
                    </div>
                </Form>
            </Formik>
        </div>

    );
};
