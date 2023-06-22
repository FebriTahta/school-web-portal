import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import SingleTeamList from '../Components/SingleTeamList';

export default function TeamList() {
    const nama = "Febri Tahta";
    return(
        <>
        <div style={{width:"100%"}}>
            <TopInfo/>
            <HeaderLayout/>
            <HeroHeading/>
            <div className="advisor-area default-padding bottom-less" style={{width:"100%"}}>
                <div className="container">
                    <div className="advisor-items text-center">
                        <div className="row">
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                            <SingleTeamList nama={nama}/>
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout/>
        </div>
        </>
    )
}