import {useEffect,useState} from "react"
import { useNavigate, NavLink } from "react-router-dom"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Sosmed from "./Sosmed"

export default function HotNews(params) {

    const [hotNews, sethotNews] = useState([]);
    const [arsip, setArsip] = useState([]);
    const [recentNews, setrecentNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const apihotNews = "https://admin.smkskrian1.com/api/hot-news";
    const apiArsip = "https://admin.smkskrian1.com/api/display-arsip";
    const apirecentNews = "https://admin.smkskrian1.com/api/recent-news";
    const image_src  = "https://admin.smkskrian1.com/news_image/";
    const image_arsip  = "https://admin.smkskrian1.com/arsip_image/";
    const navigate = useNavigate();

    const handleGoToDetailNews = (news_slug) => {
        navigate(`/baca-berita/${news_slug}`);
    }

    const daftarArsip = async () => {
        try {
            const data = await fetch(apiArsip);
            const response = await data.json();
            setArsip(response.data);

        }   catch (err) { 
            console.log(err);
        }
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
        daftarArsip();
        console.log(arsip);
    },[]);


    return(
        <>
        <div className="event-area blog-area full-blog right-sidebar full-blog" style={{marginTop:"50px"}}>
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
                <div className="event-box blog-items">
                    <div className="row">
                        <div className="col-md-9">
                            <div className="row">
                                {/* Single Event */}
                                    {isLoading ? (<Skeleton count={4}/>) : (hotNews ? hotNews.map((a,i)=> {
                                        if (i == "0") {
                                            return <div className="single-item col-lg-6" key={i} >
                                                <div className="item" style={{backgroundColor:"transparent",boxShadow:"none"}}>
                                                    <div className="">
                                                        <img src={image_src+a.news_image} style={{objectFit:"cover",width:"100%", height:"320px"}} alt="Thumb"/>
                                                    </div>
                                                    <div className="info" style={{marginTop:"40px"}}>
                                                        <div className="content" style={{textAlign:"left"}}>
                                                            <div className="top-info">
                                                                <ul>
                                                                    <li>
                                                                        <i className="fas fa-calendar-alt"></i> 
                                                                        {new Date(a.created_at).toLocaleString('default', { month: 'long' })} 
                                                                        {new Date(a.created_at).getDate()} , 
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
                                                    <div className="col-lg-5 col-5" >
                                                        <img src={image_src+a.news_image} style={{objectFit:"cover", width:"100%",height:"200px"}}/>
                                                    </div>
                                                    <div className="col-lg-7 col-7">
                                                        <div className="content" style={{padding:"5%"}}>
                                                            {a.kategori.map((a,i)=>{
                                                                return <p key={i} className="badge badge-danger badge-kategori">{a.kategori_name}</p>
                                                            })}
                                                            <h5 className="recent-title">
                                                                <a href="#" onClick={()=>handleGoToDetailNews(a.news_slug)}>{a.news_title.substring(0,40)}...</a>
                                                            </h5>
                                                            <p className="text recent-text">
                                                                {a.news_desc.replace(/(<([^>]+)>)/gi, "").substring(0,75)}...
                                                            </p>
                                                            <p className="tanggal-berita">
                                                                <i className="fa fa-calendar-alt" style={{marginRight:"5px"}}></i>
                                                                    {new Date(a.created_at).getDate()}
                                                                    {new Date(a.created_at).toLocaleString('default', { month: 'long' })} , 
                                                                    {new Date(a.created_at).getFullYear()}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        }) : null)}
                                    </div>
                            </div>
                        </div>
                        
                        <div className="col-md-3 sidebar">
                        <aside>
                            <div className="sidebar-item recent-post" style={{marginBottom:"40px"}}>
                            <div className="title">
                                <h4>E - Arsip</h4>
                                {/* <h5><u><a href="#" style={{color:"red"}}><i>Lihat seluruh arsip untuk mengunduh arsip</i></a></u></h5> */}
                            </div>
                            <ul>
                                {(arsip? arsip.map((a,i)=>{
                                    return <li key={i}>
                                        <div className="thumb">
                                            <a href="#">
                                                <img src={image_arsip+a.arsip_image} alt="Thumb" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <a href="#" style={{lineHeight:"18px"}}>E-Book {a.arsip_name}</a>
                                            <div className="meta-title">
                                                <span className="post-date"><i className="fas fa-clock"> </i> 
                                                {new Date(a.created_at).getDate()} 
                                                {new Date(a.created_at).toLocaleString('default', { month: 'long' })} , 
                                                {new Date(a.created_at).getFullYear()}
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                }) :null)}
                            </ul>
                            </div>

                            <Sosmed/>
                        </aside>
                        </div>
                        {isLoading2 ? (<Skeleton style={{
                            border: '1px solid #ccc',
                            display: 'block',
                            lineHeight: 2,
                            padding: '1rem',
                            marginBottom: '0.5rem',
                            width: 200,
                        }}/>) : (
                            <div className="single-event col-lg-12">
                                <NavLink to="/daftar-berita" style={{marginTop:"35px"}} className="btn circle btn-theme effect btn-sm btn-2hotnews">Lihat Semua Berita </NavLink>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}