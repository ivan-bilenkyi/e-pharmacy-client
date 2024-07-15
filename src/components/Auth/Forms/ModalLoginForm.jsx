import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { logIn } from "../../../redux/auth/operations.js";

export const ModalLoginForm = ({ openLoginForm, onClose }) => {
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
        dispatch(logIn(values));
        onClose()
    };

    return (
        <div>
            <h2 className='text-heading text-28 leading-114 font-bold mb-[14px] text-center'>Log in to your account</h2>
            <p className='text-topText text-14 leading-128 font-normal mb-[25px] text-center md:px-[20px]'>Please login to your account before continuing.</p>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="flex flex-col mx-auto mb-[14px]">
                    <div className='flex flex-col gap-[10px] mb-[25px] text-12 leading-150'>
                        <div className='relative'>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email address"
                                className="rounded-60 border border-darkAlpha focus:border-blue-500 w-full px-18 py-[12px]"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs absolute" />
                        </div>
                        <div className='relative'>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="rounded-60 border border-darkAlpha focus:border-blue-500 w-full px-18 py-13"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs absolute" />
                        </div>
                    </div>
                    <div className='inline-flex flex-col items-center gap-14 m-auto w-full'>
                        <button type="submit" className="w-full py-13 px-4 text-white bg-green rounded-60 hover:bg-hoverButton">Login</button>
                    </div>
                </Form>
            </Formik>
            <button onClick={() => openLoginForm(false)} className="text-darkAlpha text-12 leading-150 font-normal block m-auto">
                Don't have an account?
            </button>
        </div>
    );
};

