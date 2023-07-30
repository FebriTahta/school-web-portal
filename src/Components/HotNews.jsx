import {useEffect,useState} from "react"
import { useNavigate, NavLink } from "react-router-dom"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function HotNews(params) {

    const [hotNews, sethotNews] = useState([]);
    const [recentNews, setrecentNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const apihotNews = "https://admin.smkskrian1.com/api/hot-news";
    const apirecentNews = "https://admin.smkskrian1.com/api/recent-news";
    const image_src  = "https://admin.smkskrian1.com/image_news/";
    const navigate = useNavigate();

    const handleGoToDetailNews = (news_slug) => {
        navigate(`/baca-berita/${news_slug}`);
    }

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

    const daftarrecentNews = async () => {
        setIsLoading2(true)
        try {
            const data = await fetch(apirecentNews);
            const response = await data.json();
            setrecentNews(response.data);
        } catch (err) {
            console.log(err);
        }
        setIsLoading2(false)
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
                            <h5 style={{marginBottom:"0px"}}>Recent Education News</h5>
                            <h2>HOT NEWS</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="event-box">
                    <div className="row">
                        {/* Single Event */}
                        {isLoading ? (<Skeleton count={4}/>) : (hotNews ? hotNews.map((a,i)=> {
                            if (i == "0") {
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
                                                {a.kategori.map((a,i)=>{
                                                    return <span key={i} className="badge badge-danger badge-kategori">{a.kategori_name}</span>
                                                })}
                                                <h4 className="judul-hot-news">
                                                    <a href="#" onClick={()=>handleGoToDetailNews(a.news_slug)}>{a.news_title.substring(0,70)}...</a>
                                                </h4>
                                                <p className="desc-hot-news">
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
                            }
                        }):null)}

                        <div className="single-item col-lg-6">
                            {isLoading2 ? (<Skeleton count={4}/>) : (recentNews ? recentNews.map((a,i)=>{
                            return <div className="single-event col-lg-12" key={i}>
                                <div className="event-box recent-news">
                                    <div className="row">
                                        <div className="col-lg-4 col-4 item thumb" >
                                            <img src={image_src+a.news_image} style={{objectFit:"cover", width:"200px",height:"200px"}}/>
                                        </div>
                                        <div className="col-lg-8 col-8">
                                            <div className="content" style={{padding:"5%"}}>
                                                {a.kategori.map((a,i)=>{
                                                    return <span key={i} className="badge badge-danger badge-kategori">{a.kategori_name}</span>
                                                })}
                                                <h5>
                                                    <a href="#" onClick={()=>handleGoToDetailNews(a.news_slug)}>{a.news_title.substring(0,40)}...</a>
                                                </h5>
                                                <p className="text">
                                                    {a.news_desc.replace(/(<([^>]+)>)/gi, "").substring(0,75)}...
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

                            {isLoading2 ? (<Skeleton style={{
                                border: '1px solid #ccc',
                                display: 'block',
                                lineHeight: 2,
                                padding: '1rem',
                                marginBottom: '0.5rem',
                                width: 200,
                            }}/>) : (
                                <div className="single-event col-lg-12">
                                    <NavLink to="/daftar-berita" style={{marginTop:"50px"}} className="btn circle btn-theme effect btn-sm btn-2hotnews">Lihat Semua Berita </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}