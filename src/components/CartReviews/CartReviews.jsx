
import sprite from '../../assets/sprite.svg';
import {Rating} from "../Rating/Rating.jsx";

export const CartReviews = () => {
    return (
        <ul className='flex flex-col gap-[20px]'>
            <li className='border-[1px] border-subText rounded-[20px] py-[14px] px-[28px] font-normal text-16 leading-150 text-topText'>
                <div className='flex justify-between font-bold text-18 leading-140 text-heading mb-[14px]'>
                    <div className='flex gap-[20px]'>
                        <img className=' rounded-[30px] w-[44px] h-[44px] object-cover'
                            src="https://i.pinimg.com/236x/c8/78/62/c878627eeec0b3dcd4630108ff23ccd6.jpg"
                            alt="Larin Jan"
                        ></img>
                        <div>
                            <p>Larin Jan</p>
                            <p className='font-normal text-12 leading-150 text-darAlpha60'>2 days ago</p>
                        </div>
                    </div>
                    <Rating rating={4}/>
                </div>
                <p>
                    I&apos;ve been using this powder in my smoothies for a few weeks now.
                    My energy levels are up, and I feel great. I followed the recommended
                    dosage, and it seems to be a perfect addition to my daily routine.
                    Highly recommend!
                </p>
            </li>
            <li className='border-[1px] border-subText rounded-[20px] py-[14px] px-[28px] font-normal text-16 leading-150 text-topText'>
                <div className='flex justify-between font-bold text-18 leading-140 text-heading mb-[14px]'>
                    <div className='flex gap-[20px]'>
                        <img className=' rounded-[30px] w-[44px] h-[44px] object-cover'
                            src="https://i.pinimg.com/736x/94/0a/fc/940afc19cd0eb01c78904d43c2a80a8a.jpg"
                            alt="Leroy Jenkins"
                        ></img>
                        <div>
                            <p>Leroy Jenkins</p>
                            <p className='font-normal text-12 leading-150 text-darAlpha60'>5 days ago</p>
                        </div>
                    </div>
                    <Rating rating={4}/>
                </div>
                <p>
                    I tried pill capsules as part of my wellness regimen, and I&apos;ve
                    been pleasantly surprised by the results. My skin looks healthier, and
                    I&apos;ve noticed an improvement in my digestion. A natural and
                    effective supplement!
                </p>
            </li>
            <li className='border-[1px] border-subText rounded-[20px] py-[14px] px-[28px] font-normal text-16 leading-150 text-topText'>
                <div className='flex justify-between font-bold text-18 leading-140 text-heading mb-[14px]'>
                    <div className='flex gap-[20px]'>
                        <img className=' rounded-[30px] w-[44px] h-[44px] object-cover'
                            src="https://theperfecthumanface.wordpress.com/wp-content/uploads/2022/03/jackson-wang-face.jpg?w=620"
                            alt="Omap Epps"
                        ></img>
                        <div>
                            <p>Omap Epps</p>
                            <p className='font-normal text-12 leading-150 text-darAlpha60'>2 weeks ago</p>
                        </div>
                    </div>
                    <Rating rating={3}/>
                </div>
                <p>
                    I added this oil to my skincare routine, and the results are amazing.
                    My skin feels smoother and more nourished. I was skeptical at first,
                    but now I&apos;m a firm believer in its benefits.
                </p>
            </li>
        </ul>
    );
};