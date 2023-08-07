import {useEffect,useState} from "react"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink, useNavigate } from "react-router-dom"

export default function BadgePPDB(params) {

    const [dataPPDB, setPPDB] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [hotNews, sethotNews] = useState([]);
    // const ApiBanner = "https://admin.smkskrian1.com/api/display-banner";
    const ApiPPDB = "https://admin.smkskrian1.com/api/last-informasi-ppdb";
    const apihotNews = "https://admin.smkskrian1.com/api/hot-news";

    const navigate = useNavigate();
    
    // const handleGoToDetailNews = (news_slug) => {
    //     navigate(`/baca-berita/${news_slug}`);
    // }
    const daftarhotNews = async () => {
        setIsLoading(true);
        try {
            const data = await fetch(apihotNews);
            const response = await data.json();
            sethotNews(response.data);

        }   catch (err) { 
            console.log(err);
        }
        setIsLoading(false);
    }

    const displayPPDB = async () => {
        setIsLoading(true);
        try {
            const data = await fetch(ApiPPDB);
            const response = await data.json();
            setPPDB(response.data);
            console.log(response.data);

        }   catch (err) { 
            console.log(err);
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        displayPPDB();
        daftarhotNews();
    },[]);
    
    return(
        <>
            <div className="about-area inc-fixed-bg" style={{marginTop:"30px"}}>
                <div className="container btn-gradient " style={{backgroundColor:"#FF1949"}}>
                    <div className="about-items promo-banner" style={{color:"white"}}>
                        <div className="row align-center promo-banner__inner">
                            <div className="col-lg-12 info promo-banner__inner__one" style={{color:"white"}}>
                                <span>Informasi Baru.. <br /> </span>
                                <p className="new-info">{(dataPPDB? dataPPDB.infoppdb_title :"Pendaftaran Peserta Didik Baru 'Belum Dibuka'")} <br /></p>
                            </div>

                            <div className="col-lg-12 info promo-banner__inner__two" style={{color:"white"}}>
                                <span>Informasi Baru.. <br /> </span>
                                <p className="new-info"> 
                                    {(hotNews? hotNews.map((a,i)=>{
                                        if (i == '0') {
                                            return <span key={i}>{a.news_title}</span>   
                                        }
                                    }) :null)}
                                <br /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="about-area inc-fixed-bg" style={{marginTop:"30px"}}>
                <div className="container btn-gradient " style={{backgroundColor:"#FF1949"}}>
                    <div className="about-items promo-brosur" style={{color:"white"}}>
                        <div className="row align-center promo-brosur__inner">
                            <div className="col-lg-12 info promo-brosur__inner__one" style={{color:"white"}}>
                                <span>Informasi Baru.. <br /> </span>
                                <p className="new-info">{(dataPPDB? dataPPDB.infoppdb_title :"Pendaftaran Peserta Didik Baru 'Belum Dibuka'")} <br /></p>
                            </div>

                            <div className="col-lg-12 info promo-brosur__inner__two" style={{color:"white"}}>
                                <span>Informasi Baru.. <br /> </span>
                                <p className="new-info"> 
                                    {(hotNews? hotNews.map((a,i)=>{
                                        if (i == '0') {
                                            return <span key={i}>{a.news_title}</span>   
                                        }
                                    }) :null)}
                                <br /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}