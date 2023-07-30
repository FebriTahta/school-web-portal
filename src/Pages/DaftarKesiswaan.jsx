import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import { NavLink, useNavigate } from "react-router-dom";
import {useEffect,useState} from "react"

export default function DaftarKesiswaan(params) {
    const [dataKesiswaan, setKesiswaan] = useState([]);
    const [dataKesiswaanNew, setKesiswaanNew] = useState([]);
    const ApiKesiswaan = "https://admin.smkskrian1.com/api/daftar-kesiswaan";
    const ApiKesiswaanNew = "https://admin.smkskrian1.com/api/preview-kesiswaan";
    const kesiswaan_image = "https://admin.smkskrian1.com/kesiswaan_image/";
    const navigate = useNavigate();

    const handleGoToDetailKesiswaan = (kesiswaan_slug) => {
        navigate(`/detail-kesiswaan/${kesiswaan_slug}`);
    }

    const daftarKesiswaan = async () => {
        try {
            const data = await fetch(ApiKesiswaan);
            const response = await data.json();
            setKesiswaan(response.data);

            const dataNew = await fetch(ApiKesiswaanNew);
            const responseNew = await dataNew.json();
            setKesiswaanNew(responseNew.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    useEffect(()=>{
        daftarKesiswaan();
    },[]);

    const prev = dataKesiswaan.prev_page_url;
    const next = dataKesiswaan.next_page_url;
    const last = dataKesiswaan.last_page;

    return(
        <>
            <TopInfo></TopInfo>
            <HeaderLayout></HeaderLayout>
            <HeroHeading judul={'Informasi Kesiswaan'}></HeroHeading>
            <div className="blog-area full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-lg-8 col-md-12">
                                <div className="blog-item-box">
                                    <div className="row">
                                        {(dataKesiswaan.data? dataKesiswaan.data.map((a,i)=>{
                                            return <div className="single-item col-md-6" key={i}>
                                                <div className="item">
                                                    <div className="thumb">
                                                        <a onClick={()=>handleGoToDetailKesiswaan(a.kesiswaan_slug)} href="#"><img src={kesiswaan_image+a.kesiswaan_image} style={{width:"100%"}} alt="Thumb" /></a>
                                                    </div>
                                                    <div className="content">
                                                        <div className="top-info">
                                                            <ul style={{fontSize:"12px"}}>
                                                                <li>
                                                                    <i className="fas fa-calendar-alt"></i>
                                                                    {new Date(a.created_at).getDate()}/
                                                                    {new Date(a.created_at).toLocaleString('default', { month: 'short' })}/
                                                                    {new Date(a.created_at).getFullYear()}
                                                                </li>
                                                                <li className='hide-dokumen'><i className="fa fa-book"></i> {a.dokumen.length+" dokumen"}</li>
                                                            </ul>
                                                        </div>
                                                        {a.kategori.map((a,i)=>{
                                                            return <span key={i} className="badge badge-danger badge-kategori">{a.kategori_name}</span>
                                                        })}
                                                        <h3>
                                                            <a style={{fontSize:"14px",textTransform:"uppercase"}} onClick={()=>handleGoToDetailKesiswaan(a.kesiswaan_slug)} href="#">{a.kesiswaan_title.substring(0,30)}..</a>
                                                        </h3>
                                                        <a className="btn circle btn-sm btn-theme effect" href="#" onClick={()=>handleGoToDetailKesiswaan(a.kesiswaan_slug)}>Read More</a>
                                                    </div>
                                                </div>
                                            </div>
                                        }) :null)}

                                    </div>
                                    {/* Single Item */}
                                    
                                    {/* End Single Item */}
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
                                            <h4>Informasi Terbaru</h4>
                                        </div>
                                        <ul>
                                            {(dataKesiswaanNew? dataKesiswaanNew.map((a,i)=>{
                                                return <li key={i}>
                                                    <div className="thumb">
                                                        <a href="#" onClick={()=>handleGoToDetailKesiswaan(a.kesiswaan_slug)}>
                                                            <img src={kesiswaan_image+a.kesiswaan_image} alt="Thumb" />
                                                        </a>
                                                    </div>
                                                    <div className="info">
                                                        <a href="#" onClick={()=>handleGoToDetailKesiswaan(a.kesiswaan_slug)}>{a.kesiswaan_title.substring(0,30)}..</a>
                                                        <div className="meta-title">
                                                            <span className="post-date"><i className="fas fa-clock"></i> 
                                                                {new Date(a.created_at).getDate()}
                                                                {new Date(a.created_at).toLocaleString('default', { month: 'short' })}
                                                                {new Date(a.created_at).getFullYear()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            }) :null)}
                                        </ul>
                                    </div>
                                    <div className="sidebar-item category">
                                        <div className="title">
                                            <h4>category list</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li>
                                                    <a href="#">national <span>69</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">national <span>25</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">sports <span>18</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">megazine <span>37</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">health <span>12</span></a>
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
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#">
                                                        <i className="fab fa-pinterest"></i>
                                                    </a>
                                                </li>
                                                <li className="g-plus">
                                                    <a href="#">
                                                        <i className="fab fa-google-plus-g"></i>
                                                    </a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="#">
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
            <FooterLayout></FooterLayout>
        </>
    )
}