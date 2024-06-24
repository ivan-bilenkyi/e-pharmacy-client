import {RegisterForm} from "../components/Auth/Forms/RegisterForm.jsx";
import {AuthTitle} from "../components/Auth/AuthTitle.jsx";

export default function Register () {
    return (
        <div className='px-4 sm:px-6 lg:px-8 max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:gap-10 lg:pt-[198px]'>
            <AuthTitle/>
            <RegisterForm/>
        </div>
    )
}