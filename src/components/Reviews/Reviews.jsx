import {useEffect, useState} from "react";
import axios from "axios";

export const Reviews = () => {
    const [reviews, setReviews] = useState([])

    const [displayedReviews, setDisplayedReviews] = useState([]);

    const updateDisplayedReviews = () => {
        const width = window.innerWidth;

        if (width < 768) {
            setDisplayedReviews(reviews.slice(0, 1));
        } else if (width >= 768 && width < 1440) {
            setDisplayedReviews(reviews.slice(0, 2));
        } else {
            setDisplayedReviews(reviews);
        }
    };

    useEffect(() => {
        updateDisplayedReviews();
        window.addEventListener('resize', updateDisplayedReviews);

        return () => window.removeEventListener('resize', updateDisplayedReviews);
    }, [reviews]);

    useEffect(() => {
        const fetchAllReviews = async () => {
            const width = window.innerWidth;
            console.log(width)
            try {
                const {data} = await axios(`/customer-reviews?width=${width}`)
                setReviews(data)
            } catch (e){
                console.log(e)
            }
        }

        fetchAllReviews();
    }, []);

    return (
        <section className='text-center flex flex-col items-center gap-[64px] py-[80px]'>
            <div className='flex flex-col gap-[14px]'>
                <h2 className='font-bold text-28 leading-114 text-heading'>Reviews</h2>
                <p className='font-normal text-text text-14 leading-128'>Search for Medicine, Filter by your
                    location</p>
            </div>
            <ul className='flex flex-nowrap gap-[16px]'>
                {displayedReviews?.map(item => (
                    <li key={item._id} className='m-auto w-[335px] px-[16px] pb-[40px] bg-lightGray rounded-[27px]'>
                        <div className='relative h-[34px]'>
                            <img src={item.image} alt={item.name} className='absolute top-[-24px] left-1/2 transform translate-x-[-50%]'></img>
                        </div>
                        <h3 className='text-heading font-bold text-20 leading-150 my-[15px]'>{item.name}</h3>
                        <p className='font-normal text-text text-16 leading-125'>{item.testimonial}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}