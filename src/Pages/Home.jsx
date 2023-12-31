import HeaderLayout from '../Layouts/HeaderLayout'
import FooterLayout from '../Layouts/FooterLayout'
import TopInfo from '../Components/TopInfo'
import Banner from '../Components/Banner'
import HotNews from '../Components/HotNews'
import SlideItem from '../Components/SlideItem'
import Promo from '../Components/Promo'
import Total from '../Components/Total'
import Advisor from '../Components/Advisor'
import ProfileBottom from '../Components/ProfileBottom'
import PrevKesiswaan from '../Components/PrevKesiswaan'
import BadgePPDB from '../Components/badgePPDB'
import Brosur from '../Components/Brosur'
import FloatMenu from '../Components/FloatMenu'
import Preloader from '../Components/Preloader'


export default function Home(params) {
    return(
        <>
            <Preloader/>
            <TopInfo/>
            <HeaderLayout/>
            <Banner/>
            <BadgePPDB/>
            <HotNews/>
            <SlideItem/>
            <Promo/> 
            <PrevKesiswaan/>
            <Total/>
            <Advisor/>
            <ProfileBottom/>
            <FooterLayout/>
            <FloatMenu/>
        </>
    )
}