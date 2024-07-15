import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../../redux/auth/operations.js';
import MaskedInput from 'react-text-mask';

export const ModalRegisterForm = ({ openLoginForm, onClose }) => {
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
        dispatch(register(values));
        onClose()
    };

    return (
        <div>
            <h2 className='text-heading text-28 leading-114 font-bold mb-[14px] text-center'>Sign Up</h2>
            <p className='text-topText text-14 leading-128 font-normal mb-[25px] md:px-[38px] text-center'>Before proceeding, please register on our
                site.</p>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                <Form className='mb-[14px]'>
                    <div
                        className='flex flex-col lg:flex-row flex-wrap gap-[10px] lg:mb-[62px] mb-[20px] md:mb-[25px] text-12 leading-150'>
                        <div className='relative'>
                            <Field
                                type="text"
                                name="name"
                                placeholder="User name"
                                className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-[12px] w-full"
                            />
                            <ErrorMessage name="name" component="div" className="text-red-500 text-xs absolute"/>
                        </div>

                        <div className='relative'>
                            <Field
                                type="email"
                                name="email"
                                placeholder="Email address"
                                className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13 w-full"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-xs absolute"/>
                        </div>

                        <div className='relative'>
                            <Field name="phone">
                                {({field}) => (
                                    <MaskedInput
                                        {...field}
                                        mask={['+', '3', '8', '0', /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                                        className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13 w-full"
                                        placeholder='+380__-___-__-__'
                                    />
                                )}
                            </Field>
                            <ErrorMessage name="phone" component="div" className="text-red-500 text-xs absolute"/>
                        </div>

                        <div className='relative'>
                            <Field
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="rounded-60 border border-darkAlpha focus:border-blue-500 lg:w-[280px] px-18 py-13 w-full"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-xs absolute"/>
                        </div>
                    </div>

                    <div className='inline-flex flex-col items-center gap-14 w-full'>
                        <button type="submit"
                                className="py-13 px-4 text-white bg-green rounded-60 hover:bg-hoverButton w-full">
                            Register
                        </button>
                    </div>
                </Form>
            </Formik>
            <button onClick={() => openLoginForm(true)}
                className='text-12 leading-150 font-normal text-darkAlpha block m-auto'
            >
                Already have an account?
            </button>
        </div>
    );
};
