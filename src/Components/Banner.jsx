import {useEffect,useState} from "react"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { NavLink, useNavigate } from "react-router-dom"

export default function Banner(params) {

    const [dataBanner, setBanner] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    // const ApiBanner = "https://admin.smkskrian1.com/api/display-banner";
    const ApiBanner = "https://admin.smkskrian1.com/api/display-banner";
    const banner_image = "https://admin.smkskrian1.com/image_banner/";

    const navigate = useNavigate();
    
    // const handleGoToDetailNews = (news_slug) => {
    //     navigate(`/baca-berita/${news_slug}`);
    // }

    const daftarBanner = async () => {
        setIsLoading(true);
        try {
            const data = await fetch(ApiBanner);
            const response = await data.json();
            setBanner(response.data);
            console.log(response.data);

        }   catch (err) { 
            console.log(err);
        }
        setIsLoading(false);
    }

    useEffect(()=>{
        daftarBanner();
    },[]);
    
    return(
        <>
        <div className="banner-area bg-gray transparent-nav default bottom-large">
            <div id="bootcarousel" className="carousel text-light slide carousel-fade animate_text" data-ride="carousel">
                <div className="carousel-indicator">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ol className="carousel-indicators">
                                    <li data-target="#bootcarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#bootcarousel" data-slide-to="1"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                

                {/* Wrapper for slides */}
                <div className="carousel-inner carousel-zoom">
                    {isLoading ? (
                        <Skeleton height={200}/>
                        ) : (dataBanner ? dataBanner.map((a,i)=>{
                        if (i == 0) {
                            return <div 
                            className="carousel-item active" 
                            key={i}>
                                <div className="slider-thumb bg-cover" style={{backgroundImage:"url(https://admin.smkskrian1.com"+a.banner_path+a.banner_image+")"}}></div>
                                <div className="box-table shadow dark" style={{height:"500px"}}>
                                    <div className="box-cell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-9">
                                                    <div className="content">
                                                        <h2 data-animation="animated fadeInRight"><strong className="title-banner" style={{fontSize:"50px"}}>{a.banner_name.substring(0,30)}..</strong></h2>
                                                        <p data-animation="animated slideInLeft" style={{lineHeight:"25px"}}>
                                                            {a.banner_desc.replace(/(<([^>]+)>)/gi, "").substring(0,150)}...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }else{
                            return <div 
                            className="carousel-item" 
                            key={i}>
                                <div className="slider-thumb bg-cover" style={{backgroundImage:"url(https://admin.smkskrian1.com"+a.banner_path+a.banner_image+")"}}></div>
                                <div className="box-table shadow dark" style={{height:"500px"}}>
                                    <div className="box-cell">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-lg-9">
                                                    <div className="content">
                                                    <h2 data-animation="animated fadeInRight"><strong className="title-banner" style={{fontSize:"50px"}}>{a.banner_name.substring(0,30)}..</strong></h2>
                                                    <p data-animation="animated slideInLeft" style={{lineHeight:"25px"}}>
                                                            {a.banner_desc.replace(/(<([^>]+)>)/gi, "").substring(0,150)}...
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                        
                    }):null)}
                </div>
                {/* End Wrapper for slides */}

                {/* Left and right controls */}
                <div style={{marginTop:"20px"}}>
                    <a className="left carousel-control light" href="#bootcarousel" data-slide="prev">
                        <i className="ti-angle-left"></i>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control light" href="#bootcarousel" data-slide="next">
                        <i className="ti-angle-right"></i>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                

            </div>
            
        </div>
        </>
    )
}