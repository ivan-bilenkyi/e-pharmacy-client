import {useEffect, useState} from "react";
import axios from "axios";
import {MedicineStoreItem} from "../MedicineStoreItem/MedicineStoreItem.jsx";

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
        <section className='pb-[80px] pt-[31px] px-[20px] md:px-[32px]'>
            <div className='lg:w-[1248px] m-auto md:w-[704px]'>
                <h2 className='mb-[40px] text-28 leading-114 font-bold text-heading'>Medicine store</h2>

                <ul className='flex flex-col gap-[20px] md:flex-row md:flex-wrap items-center md:gap-x-[16px] md:gap-y-[32px] lg:gap-x-[36px] lg:gap-y-[38px]'>
                    {stores.map(item => <MedicineStoreItem key={item._id} item={item}/>)}
                </ul>
            </div>
        </section>
    )
}