import {AuthTitle} from "../components/Auth/AuthTitle.jsx";
import {LoginForm} from "../components/Auth/Forms/LoginForm.jsx";

export default function Login () {
    return (
        <div className='px-[20px] md:px-[32px] lg:px-8 max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:gap-10 lg:pt-[198px]'>
            <AuthTitle/>
            <LoginForm/>
        </div>
    )
}