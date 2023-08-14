import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import SingleNewsList from '../Components/SingleNewsList';
import {useEffect,useState} from "react"
import { NavLink, useNavigate } from "react-router-dom";
import Sosmed from '../Components/Sosmed';
import KategoriBeritaPopuler from '../Components/KategoriBeritaPopuler';
import Preloader from '../Components/Preloader';
import 'react-loading-skeleton/dist/skeleton.css';
import Skeleton from 'react-loading-skeleton';
import FloatMenu from '../Components/FloatMenu';

export default function NewsList() {

    const [dataBerita, setdataBerita] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isLoading2, setIsLoading2] = useState(true);
    const ApiBerita = "https://admin.smkskrian1.com/api/daftar-berita?page=1";
    const ApiBeritaPopuler = "https://admin.smkskrian1.com/api/berita-populer";
    const ApiKategori = "https://admin.smkskrian1.com/api/daftar-kategori";
    const berita_image = "https://admin.smkskrian1.com/news_image/";
    const navigate = useNavigate();
    
    const handleGoToDetailNews = (news_slug) => {
        navigate(`/baca-berita/${news_slug}`);
    }
 
    const daftarBerita = async () => {
        setIsLoading2(true);
        try {
            const data = await fetch(ApiBerita);
            const response = await data.json();
            setdataBerita(response.data);

        }   catch (err) { 
            console.log(err);
        }
        setIsLoading2(false);
    }
    

    const fetchPages = async (currnetPage) => {
        const response = await fetch(`https://admin.smkskrian1.com/api/daftar-berita?page=${currnetPage}`);
        const data = await response.json();
        return data.data;
    }

    

    const onPageChange = async (changepage) => {
        const daftarBerita = await fetchPages(changepage);
        setdataBerita(daftarBerita);
    }

   

    const onHandleSemuaKategori = async () => {
        daftarBerita();
    }

    const prev = dataBerita.prev_page_url;
    const next = dataBerita.next_page_url;
    const last = dataBerita.last_page;

    useEffect(()=>{
        daftarBerita();
        // daftarBeritaPopuler();
        // daftarKategori();
    },[]);

    return(
        <>
            {/* <Preloader/> */}
            <Preloader/>
            <FloatMenu/>
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
                                        {isLoading2 ? (<Skeleton count={4}/>) :(dataBerita.data ? dataBerita.data.map((a,i)=>{
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
                                    <KategoriBeritaPopuler/>
                                    <Sosmed/>
                                </aside>
                            </div>
                            {/* End Start Sidebar */}
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout/>
            <FloatMenu/>
        </>
    )
}