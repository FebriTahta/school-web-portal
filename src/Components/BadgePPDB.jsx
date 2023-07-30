import {useEffect,useState} from "react"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink, useNavigate } from "react-router-dom"

export default function BadgePPDB(params) {

    const [dataPPDB, setPPDB] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const ApiBanner = "https://admin.smkskrian1.com/api/display-banner";
    const ApiPPDB = "https://admin.smkskrian1.com/api/last-informasi-ppdb";
    const PPDB_image = "https://admin.smkskrian1.com/image_infoppdb/";

    const navigate = useNavigate();
    
    // const handleGoToDetailNews = (news_slug) => {
    //     navigate(`/baca-berita/${news_slug}`);
    // }

    const displayPPDB = async () => {
        setIsLoading(true);
        try {
            const data = await fetch(ApiBanner);
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
    },[]);
    
    return(
        <>
            <div className="about-area inc-fixed-bg default-padding-bottom" style={{marginTop:"30px"}}>
                <div className="container btn-gradient " style={{backgroundColor:"#FF1949"}}>
                    <div className="about-items" style={{color:"white"}}>
                        <div className="row align-center">
                            
                            <div className="col-lg-6 info">
                                <h2 style={{color:"white"}}>
                                    PPDB, {dataPPDB}
                                </h2>
                                <p style={{color:"white"}}>
                                    {dataPPDB}
                                </p>
                                {/* <a className="btn circle btn-md" style={{color:"#FF1949", backgroundColor:"white"}} href="#">Explore Karir Alumni</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}