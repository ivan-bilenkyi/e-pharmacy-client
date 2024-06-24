import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

export const LoginForm= () => {
    const dispatch = useDispatch();
    const validationSchema = Yup.object({
        email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters long')
            .required('Required'),
    });

    const initialValues = {
        email: '',
        password: '',
    };

    const onSubmit = (values) => {
        // dispatch(login(values))
    };

    return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="flex flex-col mx-auto mt-[78px]">

                    <div className='flex flex-col gap-14 lg:mb-[62px]'>

                        <Field
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email adress"
                            className="rounded-60 border border-darkAlpha focus:border-blue-500 w-[335px] px-18 py-13"
                        />
                        {/*<ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />*/}

                        <Field
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            className="rounded-60 border border-darkAlpha focus:border-blue-500 w-[335px] px-18 py-13"
                        />
                        {/*<ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />*/}
                    </div>

                    <div className='inline-flex flex-col items-center gap-14 m-auto'>
                        <button type="submit"
                                className="w-[335px] py-13 px-4 text-white bg-green rounded-60 hover:bg-hoverButton">Login
                        </button>
                        <Link to='/register' className='text-12 leading-150 text-darkAlpha items-center'>Don't have an account?</Link>
                    </div>
                </Form>
            </Formik>
    );
};
