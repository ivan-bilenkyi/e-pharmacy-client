import {useEffect, useState} from "react";
import axios from "axios";
import {StoreItem} from "../StoreItem/StoreItem.jsx";

export const MedicineStores = () => {
    const [stores, setStores] = useState([]);

    useEffect(() => {
        const getMedicineStores = async () => {
            const {data} = await axios('/stores');
            setStores(data);
        }

        getMedicineStores();
    }, []);

    return (
        <>
            <div className='text-center md:mg-[64px]'>
                <h2 className='w-[291px] m-auto text-dark font-bold text-28 leading-114 lg:leading-120 lg:text-40 mb-[14px]'>Your Nearest Medicine Store</h2>
                <p className='text-text font-normal text-14 leading-128 lg:text-16 lg:leading-125 mb-[40px]'>Search for Medicine, Filter by your
                    location
                </p>
            </div>
            <ul className='flex flex-col gap-[20px] md:flex-row md:flex-wrap justify-center items-center md:gap-x-[16px] md:gap-y-[32px] lg:gap-x-[36px] lg:gap-y-[38px]'>
                {stores.map(item => <StoreItem key={item._id} item={item}/>) }
            </ul>
        </>
    )
}