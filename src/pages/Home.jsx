import {Hero} from "../components/Hero/Hero.jsx";
import {PromoBanners} from "../components/PromoBanners/PromoBanners.jsx";
import {AddPharmacyPromo} from "../components/AddPharmacyPromo/AddPharmacyPromo.jsx";
import {Reviews} from "../components/Reviews/Reviews.jsx";

export default function Home() {
    return (
        <>
            <Hero/>
            <PromoBanners/>
            <AddPharmacyPromo/>
            <Reviews/>
        </>
    )
}