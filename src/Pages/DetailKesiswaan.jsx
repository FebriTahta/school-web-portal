import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import ReadNews from '../Components/ReadNews';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DetailKesiswaan() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const [berita,setBerita] = useState([]);
    const [dataBeritaPopuler, setdataBeritaPopuler] = useState([]);
    const [dataKategori, setKategori] = useState([]);
    const ApiBeritaPopuler = "https://admin.smkskrian1.com/api/preview-kesiswaan";
    const ApiKategori = "https://admin.smkskrian1.com/api/daftar-kategori";
    const berita_image = "https://admin.smkskrian1.com/kesiswaan_image/";

    const thisBerita = async (slug) => {
        const data = await fetch(`https://admin.smkskrian1.com/api/detail-kesiswaan/${slug}`);
        const response = await data.json();
        setBerita(response.data);
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

    const handleGoToDetailNews = (news_slug) => {
        navigate(`/detail-kesiswaan/${news_slug}`);
        // console.log(news_slug);
    }

    const handleGoToBeritaFromKategori = (kategori_slug) => {
        navigate(`/daftar-kesiswaan-berdasarkan-kategori/${kategori_slug}`);
    }

    const handleGoToDaftarBerita = () =>{
        navigate('/daftar-kesiswaan');
    }

    useEffect(() => {
        thisBerita(slug);
        daftarBeritaPopuler();
        daftarKategori();
        
    }, [slug]);


    return(<>
        <TopInfo/>
            <HeaderLayout/>
            <HeroHeading judul={"Baca Berita"}/>
            <div className="blog-area full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-lg-8 col-md-12">
                                <ReadNews news_image={berita_image+berita.kesiswaan_image} news_tanggal={new Date(berita.created_at).getDate()}
                                news_bulan = {new Date(berita.created_at).toLocaleString('default', { month: 'short' })} news_tahun={new Date(berita.created_at).getFullYear()}
                                news_title={berita.kesiswaan_title} news_desc={berita.kesiswaan_desc}/>

                                    <div className="item" style={{marginTop:"20px"}}> 
                                        <div className="blog-item-box">
                                        <div className="content">
                                        <ul>
                                        {(berita.dokumen ? berita.dokumen.map((a,i)=>{
                                            return <div key={i}>
                                                <p>{a.dokumen_name}</p>
                                                <a href={'https://admin.smkskrian1.com/uploads/'+a.dokumen_docs} download={a.dokumen_docs} className='btn btn-xs btn-primary'>download</a>
                                            </div>
                                        }) :null)}
                                        </ul>
                                        </div>
                                        </div>    
                                    </div>
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
                                            <h4>Informasi Terbaru</h4>
                                        </div>
                                        <ul>
                                            {(dataBeritaPopuler ? dataBeritaPopuler.map((a,i)=>{
                                                return <li key={i}>
                                                <div className="thumb">
                                                    <img src={berita_image+a.kesiswaan_image} style={{objectFit:"cover",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} alt="Thumb" />
                                                </div>
                                                <div className="info">
                                                    <a href="#judul" onClick={() => handleGoToDetailNews(a.kesiswaan_slug)}>{a.kesiswaan_title.substring(0,80)}...</a>
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
                                                        <a href="#kategori" onClick={()=> handleGoToBeritaFromKategori(a.kategori_slug)}>{a.kategori_name} <span>{a.news_count}</span></a>
                                                    </li>
                                                }):null)}
                                                <li><a href="#" onClick={()=>handleGoToDaftarBerita()}>Semua Kategori</a></li>
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
    </>)
}