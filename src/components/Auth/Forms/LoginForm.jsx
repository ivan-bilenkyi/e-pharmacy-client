import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {logIn} from "../../../redux/auth/operations.js";

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
        dispatch(logIn(values))
    };

    return (
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="flex flex-col mx-auto md:m-0 mt-[78px]">

                    <div className='flex flex-col gap-[10px] md:mb-[62px] mb-[132px] text-12 leading-150'>
                        <div className='relative'>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email adress"
                                className="rounded-60 border border-darkAlpha focus:border-blue-500 w-[335px] px-18 py-[12px]"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs absolute" />
                        </div>



                        <div className='relative'>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="rounded-60 border border-darkAlpha focus:border-blue-500 w-[335px] px-18 py-13"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs absolute" />
                        </div>
                    </div>

                    <div className='inline-flex flex-col items-center gap-14 m-auto md:m-0 md:mr-auto'>
                        <button type="submit"
                                className="w-[335px] py-13 px-4 text-white bg-green rounded-60 hover:bg-hoverButton">Login
                        </button>
                        <Link to='/register' className='text-12 leading-150 text-darkAlpha items-center'>Don't have an account?</Link>
                    </div>
                </Form>
            </Formik>
    );
};
