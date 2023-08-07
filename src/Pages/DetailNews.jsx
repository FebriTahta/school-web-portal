import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import ReadNews from '../Components/ReadNews';
import Sosmed from '../Components/Sosmed';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import KategoriBeritaPopuler from '../Components/KategoriBeritaPopuler';

export default function DetailNews() {

    // const navigate = useNavigate(); 
    const { slug } = useParams();
    const [berita,setBerita] = useState([]);
    // const [dataBeritaPopuler, setdataBeritaPopuler] = useState([]);
    // const [dataKategori, setKategori] = useState([]);
    // const ApiBeritaPopuler = "https://admin.smkskrian1.com/api/berita-populer";
    // const ApiKategori = "https://admin.smkskrian1.com/api/daftar-kategori";
    const berita_image = "https://admin.smkskrian1.com/news_image/";
    
    const thisBerita = async (slug) => {
        const data = await fetch(`https://admin.smkskrian1.com/api/baca-berita/${slug}`);
        const response = await data.json();
        setBerita(response.data);
    }
    

    // const daftarBeritaPopuler = async () => {
    //     try {
    //         const data = await fetch(ApiBeritaPopuler);
    //         const response = await data.json();
    //         setdataBeritaPopuler(response.data);

    //     }   catch (err) { 
    //         console.log(err);
    //     }
    // }

    // const daftarKategori = async () => {
    //     try {
    //         const data = await fetch(ApiKategori);
    //         const response = await data.json();
    //         setKategori(response.data);

    //     }   catch (err) { 
    //         console.log(err);
    //     }
    // }

    // const handleGoToDetailNews = (news_slug) => {
    //     navigate(`/baca-berita/${news_slug}`);
    //     // console.log(news_slug);
    // }

    // const handleGoToBeritaFromKategori = (kategori_slug) => {
    //     navigate(`/daftar-berita-berdasarkan-kategori/${kategori_slug}`);
    // }

    // const handleGoToDaftarBerita = () =>{
    //     navigate('/daftar-berita');
    // }

    useEffect(() => {
        thisBerita(slug);
        // daftarBeritaPopuler();
        // daftarKategori();
        console.log(berita.news_image);
    }, [slug]);

    return(
        <>
            <TopInfo/>
            <HeaderLayout/>
            <HeroHeading judul={"Baca Berita"}/>
            <div className="blog-area full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-lg-8 col-md-12">
                                <ReadNews news_image={berita_image+berita.news_image} news_tanggal={new Date(berita.created_at).getDate()}
                                news_bulan = {new Date(berita.created_at).toLocaleString('default', { month: 'short' })} news_tahun={new Date(berita.created_at).getFullYear()}
                                news_title={berita.news_title} news_desc={berita.news_desc}/>
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
        </>
    )
}