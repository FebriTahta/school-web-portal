import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import {useEffect,useState} from "react"
import { NavLink, useNavigate } from "react-router-dom";

export default function DaftarPrestasi(params) {
    const [dataBerita, setdataBerita] = useState([]);
    const [dataBeritaPopuler, setdataBeritaPopuler] = useState([]);
    const [dataKategori, setKategori] = useState([]);
    const ApiBerita = "https://admin.smkskrian1.com/api/daftar-prestasi?page=1";
    const ApiBeritaPopuler = "https://admin.smkskrian1.com/api/berita-populer";
    const ApiKategori = "https://admin.smkskrian1.com/api/daftar-kategori";
    const berita_image = "https://admin.smkskrian1.com/image_news/";
    const navigate = useNavigate();
    
    const handleGoToDetailNews = (news_slug) => {
        navigate(`/baca-berita/${news_slug}`);
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
        daftarBerita();
        daftarBeritaPopuler();
        daftarKategori();
        console.log(dataBerita.data); 
    },[]);

    return (<>
        <TopInfo/>
        <HeaderLayout/>
        <HeroHeading judul={'Daftar Prestasi'}/>
        <div className="blog-area default-padding">
            <div className="container">
                <div className="blog-items">
                    <div className="blog-content">
                        <div className="blog-item-box">
                            <div className="row">
                                {/* Single Item */}
                                {(dataBerita.data? dataBerita.data.map((a,i)=>{
                                    return <div className="col-lg-4 col-md-6 single-item">
                                        <div className="item">
                                            <div className="thumb">
                                                <a href="#"><img src="/assets/img/800x600.png" alt="Thumb" /></a>
                                                <div className="date">
                                                    <strong>18 </strong> Aug
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h4><a href="blog-single-right-sidebar.html">Parish any chatty can elinor direct for former.</a></h4>
                                                <p>
                                                    Arndlord packages overcame distance smallest in recurred. Wrong maids or be asked Household. 
                                                </p>
                                            </div>
                                            <div className="bottom-info">
                                                <span><i className="fas fa-user"></i> Jones Alex</span>
                                                <a className="btn-more" href="#">Read More <i className="arrow_right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                }) :null)}
                                
                                {/* End Single Item */}
                            </div>
                            
                            {/* Pagination */}
                            <div className="row">
                                <div className="col-md-12 pagi-area text-center">
                                    <nav aria-label="navigation">
                                        <ul className="pagination">
                                            <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                                            <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterLayout/>
    </>)
}