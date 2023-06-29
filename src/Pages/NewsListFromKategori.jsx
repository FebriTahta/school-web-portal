import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import SingleNewsList from '../Components/SingleNewsList';
import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

export default function NewsListFromKategori() {

    const [dataBerita, setdataBerita] = useState([]);
    const [dataBeritaPopuler, setdataBeritaPopuler] = useState([]);
    const [dataKategori, setKategori] = useState([]);
    const ApiBerita = "https://admin.smkskrian1.com/api/daftar-berita?page=1";
    const ApiBeritaPopuler = "https://admin.smkskrian1.com/api/berita-populer";
    const ApiKategori = "https://admin.smkskrian1.com/api/daftar-kategori";
    const berita_image = "https://admin.smkskrian1.com/image_news/";
    const { slug } = useParams();
    const navigate = useNavigate();

    const handleGoToDetailNews = (news_slug) => {
        navigate(`/baca-berita/${news_slug}`);
    }

    const thisBeritaFromKategori = async (slug) => {
        const data = await fetch(`https://admin.smkskrian1.com/api/daftar-berita-berdasarkan-kategori/${slug}`);
        const response = await data.json();
        setdataBerita(response.data);
    }

    const daftarBerita = async () => {
        try {
            const data = await fetch(ApiBerita);
            const response = await data.json();
            setdataBerita(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    const daftarBeritaPopuler = async () => {
        try {
            const data = await fetch(ApiBeritaPopuler);
            const response = await data.json();
            setdataBeritaPopuler(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    const daftarKategori = async () => {
        try {
            const data = await fetch(ApiKategori);
            const response = await data.json();
            setKategori(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    const fetchPages = async (currnetPage) => {
        const response = await fetch(`https://admin.smkskrian1.com/api/daftar-berita?page=${currnetPage}`);
        const data = await response.json();
        return data.data;
    }

    const fetchBeritaBerdasarkanKategori = async (kategori_slug) => {
        const response = await fetch(`http://localhost:8000/api/daftar-berita-berdasarkan-kategori/${kategori_slug}`);
        const data = await response.json();
        return data.data;
    }

    const onPageChange = async (changepage) => {
        const daftarBerita = await fetchPages(changepage);
        setdataBerita(daftarBerita);
    }

    const onPageBeritaBerdasarkanKategori = async (changepage) => {
        const daftarBeritaBerdasarkanKategori = await fetchBeritaBerdasarkanKategori(changepage);
        setdataBerita(daftarBeritaBerdasarkanKategori);
    }

    const onHandleSemuaKategori = async () => {
        daftarBerita();
    }

    const prev = dataBerita.prev_page_url;
    const next = dataBerita.next_page_url;
    const last = dataBerita.last_page;

    useEffect(()=>{
        // daftarBerita();
        thisBeritaFromKategori(slug);
        daftarBeritaPopuler();
        daftarKategori();
    },[slug]);

    return(
        <>
            <TopInfo/>
            <HeaderLayout/>
            <HeroHeading judul={"Daftar Berita"}/>
            <div className="blog-area full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-lg-8 col-md-12">
                                <div className="blog-item-box">
                                    {/* Single Item */}
                                    <div className="single-item">
                                        <div className="row">
                                        {(dataBerita.data ? dataBerita.data.map((a,i)=>{
                                            return <SingleNewsList key={i} 
                                            news_title={a.news_title} news_desc={a.news_desc}
                                            news_tanggal={new Date(a.created_at).getDate()}
                                            news_bulan={new Date(a.created_at).toLocaleString('default', { month: 'short' })}
                                            news_tag={a.kategori} 
                                            news_slug={a.news_slug}
                                            news_image={berita_image+a.news_image}/>
                                        }):null)}
                                        </div>
                                    </div>
                                </div>
                                {/* Pagination */}
                                {
                                    last > 1 ? <div className="row">
                                        <div className="col-md-12 pagi-area text-center">
                                            <nav aria-label="navigation">
                                                <ul className="pagination">
                                                    {prev && <li className="page-item"><a className="page-link" href="#" onClick={() => onPageChange(dataBerita.current_page - 1)}><i className="fas fa-angle-double-left"></i></a></li>}
                                                    <li className="page-item active"><a className="page-link" href="#">{dataBerita.current_page}</a></li>
                                                    <li className="page-item"><a className="page-link" href="#">{dataBerita.current_page + 1}</a></li>
                                                    {next && <li className="page-item"><a className="page-link" href="#" onClick={() => onPageChange(dataBerita.current_page + 1)}><i className="fas fa-angle-double-right"></i></a></li>}
                                                </ul>
                                            </nav>
                                        </div>
                                    </div> : null
                                }
                            </div>
                            {/* Start Sidebar */}
                            <div className="sidebar col-lg-4 col-md-12">
                                <aside>
                                    <div className="sidebar-item search">
                                        <div className="sidebar-info">
                                            <form>
                                                <input type="text" name="text" className="form-control" />
                                                <button type="submit"><i className="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sidebar-item recent-post">
                                        <div className="title">
                                            <h4>Berita Populer</h4>
                                        </div>
                                        <ul>
                                            {(dataBeritaPopuler ? dataBeritaPopuler.map((a,i)=>{
                                                return <li key={i}>
                                                <div className="thumb">
                                                    <img src={berita_image+a.news_image} style={{objectFit:"cover", height:"110px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} alt="Thumb" />
                                                </div>
                                                <div className="info">
                                                    <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)}>{a.news_title.substring(0,80)}...</a>
                                                    <div className="meta-title">
                                                        <span className="post-date"><i className="fas fa-clock"></i> 
                                                        {new Date(a.created_at).getDate()} {new Date(a.created_at).toLocaleString('default', { month: 'short' })}, 
                                                        {new Date(a.created_at).getFullYear()}</span>
                                                    </div>
                                                </div>
                                            </li>
                                            }):null)}
                                        </ul>
                                    </div>
                                    <div className="sidebar-item category">
                                        <div className="title">
                                            <h4>category list</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                {(dataKategori ? dataKategori.map((a,i)=>{
                                                    return <li key={i}>
                                                        <a href="#kategori" onClick={() => onPageBeritaBerdasarkanKategori(a.kategori_slug)}
                                                        >{a.kategori_name} <span>{a.news_count}</span></a>
                                                    </li>
                                                }):null)}
                                                <li>
                                                    <a href="#semua_kategori" onClick={()=>onHandleSemuaKategori()}>Semua Kategori</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div className="sidebar-item social-sidebar">
                                        <div className="title">
                                            <h4>follow us</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li className="facebook">
                                                    <a href="#fb">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#tw">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#pt">
                                                        <i className="fab fa-pinterest"></i>
                                                    </a>
                                                </li>
                                                <li className="g-plus">
                                                    <a href="#pl">
                                                        <i className="fab fa-google-plus-g"></i>
                                                    </a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="#lk">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </aside>
                            </div>
                            {/* End Start Sidebar */}
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout/>
        </>
    )
}