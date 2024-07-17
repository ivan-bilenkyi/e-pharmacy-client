import {RegisterForm} from "../components/Auth/Forms/RegisterForm.jsx";
import {AuthTitle} from "../components/Auth/AuthTitle.jsx";

export default function Register () {
    return (
        <div
            className='px-[20px] md:px-[32px]  lg:px-8 max-w-screen-lg mx-auto flex flex-col lg:flex-row lg:gap-[54px] lg:pt-[198px] h-[91vh] relative overflow-hidden'>
            <AuthTitle/>
            <RegisterForm/>
            <div
                className='absolute bottom-[-35px] right-[-60px] lg:right-[-45px] rotate-[22deg] w-[264px] flex flex-wrap gap-[10px] md:gap-[15px]'>
                <div
                    className='w-[222px] h-[47px]  md:h-[71px] md:w-[336px] rounded-[20px] md:rounded-[60px] ml-[80px] bg-greenAlphaLight'></div>
                <div
                    className='w-[222px] h-[47px] md:h-[71px] md:w-[336px] rounded-[20px] md:rounded-[60px]  bg-greenAlphaLight'></div>
                <div
                    className='w-[222px] h-[47px] md:h-[71px] md:w-[336px] rounded-[20px] md:rounded-[60px] ml-[40px] bg-greenAlphaLight'></div>
            </div>
        </div>
    )
}