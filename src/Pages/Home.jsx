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
import PrevKrsiswaan from '../Components/PrevKesiswaan'
import BadgePPDB from '../Components/badgePPDB'


export default function Home(params) {
    return(
        <>
            <TopInfo/>
            <HeaderLayout/>
            <Banner/>
            {/* <BadgePPDB/> */}
            <HotNews/>
            <SlideItem/>
            <Promo/>
            <PrevKrsiswaan/>
            <Total/>
            <Advisor/>
            <ProfileBottom/>
            <FooterLayout/>
        </>
    )
}