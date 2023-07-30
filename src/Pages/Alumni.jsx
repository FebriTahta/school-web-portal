import HeaderLayout from '../Layouts/HeaderLayout'
import FooterLayout from '../Layouts/FooterLayout'
import TopInfo from '../Components/TopInfo'
import HeroHeading from '../Components/HeroHeading'
import FormAlumni from '../Components/FormAlumni'
import { NavLink, useNavigate } from "react-router-dom";
import {useEffect,useState} from "react"

export default function Alumni(params) {

    const [dataAlumni, setAlumni] = useState([]);
    const [dataJurusan, setJurusan] = useState([]);
    const ApiAlumni = "https://admin.smkskrian1.com/api/daftar-alumni";
    const ApiJurusanAlumni = "https://admin.smkskrian1.com/api/daftar-jurusan-alumni";
    const image_alumni = "https://admin.smkskrian1.com/image_alumni/";
    const navigate = useNavigate();

    

    const daftarAlumni = async () => {
        try {
            const data = await fetch(ApiAlumni);
            const response = await data.json();
            setAlumni(response.data);
        }   catch (err) { 
            console.log(err);
        }
    }

    const daftarJurusan = async () => {
        try {
            const data = await fetch(ApiJurusanAlumni);
            const response = await data.json();
            setJurusan(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        daftarAlumni();
        daftarJurusan();
    },[]);

    const prev = dataAlumni.prev_page_url;
    const next = dataAlumni.next_page_url;
    const last = dataAlumni.last_page;

    
    return(
        <>
            <TopInfo/>
            <HeaderLayout/>
            <HeroHeading/>
            <div className="course-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 info">

                            <div className="top-info">
                                <h2>DAFTAR ALUMNI <br/> BERPRESTASI</h2>
                            </div>

                            <div className="main-content">
                                <div className="center-tabs">
                                    <ul id="tabs" className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a href="" data-target="#tab3" data-toggle="tab" className="active nav-link">Daftar Alumni</a>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a href="" data-target="#tab4" data-toggle="tab" className="nav-link">Ulasan  Alumni</a>
                                        </li> */}
                                        <li className="nav-item">
                                            <a href="" data-target="#tab5" data-toggle="tab" className="nav-link">Isi Data Alumni</a>
                                        </li>
                                    </ul>
                                    <div id="tabsContent" className="tab-content">
                                        <div id="tab3" className="tab-pane advisor fade active show">
                                            <div className="advisor-items">
                                                {/* Single Item */}
                                                {(dataAlumni.data ? dataAlumni.data.map((a,i)=>{
                                                    return <div className="single-item" key={i}>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 thumb">
                                                            <img style={{width:"170px", height:"200px", objectFit:"cover", borderRadius:"15px"}} src={image_alumni+a.alumni_image} alt="Advisor" />
                                                        </div>
                                                        <div className="col-lg-8 col-md-8 info">
                                                            <h4>{a.alumni_name}</h4>
                                                            <span>{a.alumni_pekerjaan}</span>
                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <span> 5 </span>
                                                            </div>
                                                            <p>
                                                                {a.alumni_alamatpekerjaan}
                                                            </p>
                                                            <ul>
                                                                <li><i className="fas fa-users"></i> Asal Jurusan : </li>
                                                                <li> {a.jurusan.jurusan_name}</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <hr style={{marginTop:"20px"}}/>
                                                </div>
                                                }) : null)}
                                            </div>
                                        </div>
                                        <div id="tab5" className="tab-pane reviews fade">
                                            <FormAlumni/>
                                        </div>
                                        <div id="tab4" className="tab-pane reviews fade">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="avg-ratings">
                                                        <h2>4.9</h2>
                                                        <div className="rating">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star-half-alt"></i>
                                                        </div>
                                                        1,455 Ratings
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 rating-counter">
                                                    <ul>
                                                        <li>
                                                            <span>5 Star</span>
                                                            <span>13</span>
                                                            <div className="rating-bar"></div>
                                                        </li>
                                                        <li>
                                                            <span>4 Star</span>
                                                            <span>1</span>
                                                            <div className="rating-bar"></div>
                                                        </li>
                                                        <li>
                                                            <span>3 Star</span>
                                                            <span>0</span>
                                                            <div className="rating-bar"></div>
                                                        </li>
                                                        <li>
                                                            <span>2 Star</span>
                                                            <span>1</span>
                                                            <div className="rating-bar"></div>
                                                        </li>
                                                        <li>
                                                            <span>1 Star</span>
                                                            <span>0</span>
                                                            <div className="rating-bar"></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="rating-provider">
                                                <div className="single-item">
                                                    <div className="thumb">
                                                        <img src="assets/img/800x800.png" alt="Thumb" />
                                                    </div>
                                                    <div className="info">
                                                        <div className="title">
                                                            <h4>Mira Jone</h4>
                                                            <span>15 December, 2020</span>
                                                        </div>
                                                        <div className="rating">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                Agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least. 
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="single-item">
                                                    <div className="thumb">
                                                        <img src="assets/img/800x800.png" alt="Thumb" />
                                                    </div>
                                                    <div className="info">
                                                        <div className="title">
                                                            <h4>Mira Jone</h4>
                                                            <span>15 December, 2020</span>
                                                        </div>
                                                        <div className="rating">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                Agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least. 
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 sidebar" style={{paddingTop:"200px"}}>
                            <div className="item course-category">
                                <div className="content">
                                    <h4>Jurusan Ternama Yang Mencetak Alumni</h4>
                                    <ul>
                                        {(dataJurusan ? dataJurusan.map((a,i)=>{
                                            return <li key={i}>
                                                <a href="#0" style={{fontSize:"13px"}}>{a.jurusan_name} <span>{a.alumni_count}</span></a>
                                            </li>
                                        }) : null)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout/>
        </>
    )
}