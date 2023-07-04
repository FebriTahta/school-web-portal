import {useEffect,useState} from "react"
import { useNavigate, NavLink } from "react-router-dom"
export default function HotNews(params) {

    const [hotNews, sethotNews] = useState([]);
    const [recentNews, setrecentNews] = useState([]);
    const apihotNews = "https://admin.smkskrian1.com/api/hot-news";
    const apirecentNews = "https://admin.smkskrian1.com/api/recent-news";
    const image_src  = "https://admin.smkskrian1.com/image_news/";
    const navigate = useNavigate();

    const handleGoToDetailNews = (news_slug) => {
        navigate(`/baca-berita/${news_slug}`);
    }

    const daftarhotNews = async () => {
        try {
            const data = await fetch(apihotNews);
            const response = await data.json();
            sethotNews(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    const daftarrecentNews = async () => {
        try {
            const data = await fetch(apirecentNews);
            const response = await data.json();
            setrecentNews(response.data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(()=>{
        daftarhotNews();
        daftarrecentNews();
    },[]);


    return(
        <>
        <div className="event-area default-padding bottom-less">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h5 style={{marginBottom:"0px"}}>Upcoming & Recent Education Events / News</h5>
                            <h2>News List</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="event-box">
                    <div className="row">
                        {/* Single Event */}

                        {(hotNews ? hotNews.map((a, i)=> {
                            {if (i == "0") {
                                return <div className="single-item col-lg-6" key={i}>
                                    <div className="item">
                                        <div className="thumb">
                                            <img src={image_src+a.news_image} style={{objectFit:"cover",width:"100%", height:"320px"}} alt="Thumb"/>
                                        </div>
                                        <div className="info">
                                            <div className="content">
                                                <div className="top-info">
                                                    <ul>
                                                        <li>
                                                            <i className="fas fa-calendar-alt"></i> 
                                                            {new Date(a.created_at).toLocaleString('default', { month: 'long' })} 
                                                            {new Date(a.created_at).getDate()}, 
                                                            {new Date(a.created_at).getFullYear()}
                                                        </li>
                                                        <li><i className="fas fa-clock"></i> {new Date(a.created_at).getHours()}:{new Date(a.created_at).getMinutes()}</li>
                                                    </ul>
                                                </div>
                                                <h4>
                                                    <a href="#" onClick={()=>handleGoToDetailNews(a.news_slug)}>{a.news_title.substring(0,70)}...</a>
                                                </h4>
                                                <p>
                                                    {a.news_desc.replace(/(<([^>]+)>)/gi, "").substring(0,150)}...
                                                </p>
                                                <div className="bottom-info">
                                                    <div className="location">
                                                        <i className="fas fa-map-marker-alt"></i>
                                                        SMK 1 Krian
                                                    </div>
                                                    <a href="#" onClick={()=>handleGoToDetailNews(a.news_slug)} className="btn circle btn-theme effect btn-sm btn-2hotnews">BACA SEKARANG</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            }}
                        }) : null)}

                            <div className="single-item col-lg-6">
                                {(recentNews ? recentNews.map((a,i)=>{
                                return <div className="single-event col-lg-12" key={i}>
                                    <div className="event-box  recent-news" style={{maxHeight:"200px"}}>
                                        <div className="row">
                                            <div className="col-lg-4 col-4 item thumb" 
                                            // style={{backgroundImage: "url("+image_src+a.news_image+")"}}
                                            >
                                                <img src={image_src+a.news_image} style={{objectFit:"cover", width:"200px",height:"200px"}}/>
                                            </div>
                                            <div className="col-lg-8 col-8">
                                                <div className="content" style={{padding:"5%"}}>
                                                    <h5>
                                                        <a href="#" onClick={()=>handleGoToDetailNews(a.news_slug)}>{a.news_title.substring(0,40)}...</a>
                                                    </h5>
                                                    <p className="text">
                                                        {a.news_desc.replace(/(<([^>]+)>)/gi, "").substring(0,80)}...
                                                    </p>
                                                    <p className="tanggal-berita">
                                                        <i className="fa fa-calendar-alt"></i> 19 April 2023
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                }) : null)}
                                <div className="single-event col-lg-12">
                                    <NavLink to="/daftar-berita" className="btn circle btn-theme effect btn-sm btn-2hotnews">Lihat Semua Berita </NavLink>
                                </div>
                            </div>
                       
                       
                        {/* End Single Event */}
                        
                        {/* End Single Event */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}