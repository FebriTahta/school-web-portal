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
            <div className="courses-area trend-layout bg-gray default-padding bottom-less">
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
                    <div className="courses-items">
                        <div className="row">
                            {/* Single item */}
                            
                            {(dataKesiswaan ? dataKesiswaan.map((a,i)=>{
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
                            }) : null)}
                            
                            {/* End Single item */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}