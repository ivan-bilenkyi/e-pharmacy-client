import {Hero} from "../components/Hero/Hero.jsx";
import {PromoBanners} from "../components/PromoBanners/PromoBanners.jsx";
import {AddPharmacyPromo} from "../components/AddPharmacyPromo/AddPharmacyPromo.jsx";

export default function Home() {
    return (
        <div className=''>
            <Hero/>
            <PromoBanners/>
            <AddPharmacyPromo/>
        </div>
    )
}