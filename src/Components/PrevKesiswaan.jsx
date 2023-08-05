import {useEffect,useState} from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function PrevKrsiswaan() {
    const [dataKesiswaan, setKesiswaan] = useState([]);
    const ApiKesiswaan = "https://admin.smkskrian1.com/api/preview-kesiswaan";
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

        }   catch (err) { 
            console.log(err);
        }
    }

    useEffect(()=>{
        daftarKesiswaan();
    },[]);

    return(
        <>
            <div className="blog-area full-blog trend-layout bg-gray default-padding bottom-less">
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-5">
                                <h5>Kesiswaan</h5>
                                <h2>
                                    Pengumuman Terkait Kesiswaan
                                </h2>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <p>
                                    Segala berita yang berkaitan dengan kesiswaan akan diinformasikan sebagai berikut ini. Periksa juga daftar keseluruhan beritanya
                                </p>
                                <NavLink to={'/daftar-kesiswaan'} className="btn btn-md btn-dark border" href="#">View All <i className="fas fa-plus"></i></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            {/* Single item */}

                            <div className="blog-content col-lg-12 col-md-12" >
                                <div className="blog-item-box" > 
                                    {/* Single Item */}
                                    <div className="single-item" >
                                        <div className="row">
                                            {(dataKesiswaan ? dataKesiswaan.map((a,i)=>{
                                                return <div className="col-md-4 mb-5" id={"kesiswaan-ke-"+i} key={i}>
                                                    <div className="item">
                                                        <div className="thumb" >
                                                            <a href="#" onClick={() => handleGoToDetailKesiswaan(a.kesiswaan_slug)}><img src={kesiswaan_image+a.kesiswaan_image} alt="Thumb"/></a>
                                                            <div className="date">
                                                                <strong>{new Date(a.created_at).getDate()} </strong> {new Date(a.created_at).toLocaleString('default', { month: 'short' })}
                                                            </div>
                                                        </div>
                                                        <div className="content" style={{marginTop:"20px"}}>
                                                            {a.kategori.map((a,i)=>{
                                                                return <span key={i} style={{marginRight:"5px"}} className="badge badge-danger">{a.kategori_name}</span>
                                                            })}
                                                            <h4 style={{fontSize:"18px",marginTop:"10px"}}><a href="#" onClick={() => handleGoToDetailKesiswaan(a.kesiswaan_slug)}>{a.kesiswaan_title.substring(0,50)}...</a></h4>
                                                        </div>
                                                        <div className="bottom-info">
                                                            <span><i className="fas fa-user"></i> SMK 1 Krian</span>
                                                            <a className="btn-more" href="#" onClick={() => handleGoToDetailKesiswaan(a.kesiswaan_slug)}>Read More <i className="arrow_right"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            }) :null)}
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* {(dataKesiswaan ? dataKesiswaan.map((a,i)=>{
                                return <div className="single-item col-lg-4 col-md-6" id={"kesiswaan-ke-"+i} key={i}>
                                    <div className="item">
                                        <div className="thumb">
                                            <a href="#" onClick={()=>handleGoToDetailKesiswaan(a.kesiswaan_slug)}>
                                                <img src={kesiswaan_image+a.kesiswaan_image} style={{objectFit:"cover", width:"100%",height:"250px"}} alt="Thumb" />
                                            </a>
                                        </div>
                                        <div className="info">
                                            <h4>
                                                <a onClick={()=>handleGoToDetailKesiswaan(a.kesiswaan_slug)} href="#" style={{textTransform:"uppercase"}}>{a.kesiswaan_title.substring(0,30)}..</a>
                                            </h4>
                                            <div className="bottom-info">
                                                <div className="course-info">
                                                    <ul>
                                                        <li><i className="fas fa-clock"></i>
                                                            {new Date(a.created_at).getDate()}/
                                                            {new Date(a.created_at).toLocaleString('default', { month: 'short' })}/
                                                            {new Date(a.created_at).getFullYear()}
                                                        </li>
                                                        <li><i className="fas fa-list-ul"></i> {a.dokumen.length+" dokumen"}</li>
                                                    </ul>
                                                </div>
                                                <div className="enroll">
                                                    <a onClick={()=>handleGoToDetailKesiswaan(a.kesiswaan_slug)} className="btn btn-theme effect btn-xs">Selengkapnya</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }) : null)} */}
                            
                            {/* End Single item */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}