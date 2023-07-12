import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import { useNavigate, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import {useEffect,useState} from "react"

export default function DetailJurusan() {

    const [dataJurusan, setJurusan] = useState([]);
    const jurusan_image = "https://admin.smkskrian1.com/image_jurusan/";
    const { slug } = useParams();

    const thisJurusan = async (slug) => {
        const data = await fetch(`https://admin.smkskrian1.com/api/detail-jurusan/${slug}`);
        const response = await data.json();
        setJurusan(response.data);
    }

    useEffect(()=>{
        thisJurusan(slug);
        console.log(dataJurusan.jurusan_image); 
    },[slug]);
    
    return(
        <>
            <TopInfo/>
            <HeaderLayout/>
            <HeroHeading judul={'Detail Jurusan'}/>
            <div className="blog-area single full-blog full-blog default-padding">
        <div className="container">
            <div className="blog-items">
                <div className="row">
                    <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                        <div className="item">

                            <div className="blog-item-box">
                                {/* Start Post Thumb */}
                                <div className="thumb">
                                    <img style={{width:"100%"}} src={dataJurusan? jurusan_image+dataJurusan.jurusan_image :null} alt="Thumb" />
                                </div>
                                {/* Start Post Thumb */}

                                <div className="content">
                                    <div className="top-info">
                                        <div className="top-meta">
                                            <ul>
                                                <li><i className="fas fa-user"></i> {dataJurusan ?dataJurusan.jurusan_anak :null} Anak & {dataJurusan? dataJurusan.jurusan_kelas :null} Kelas</li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                    <div style={{textAlign:"left"}} className="kiri">
                                    <h3>{dataJurusan.jurusan_name}</h3>
                                    <p >
                                        {dataJurusan.jurusan_desc ? dataJurusan.jurusan_desc.replace(/(<([^>]+)>)/gi, "") :null}
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Start Post Pagination */}
                        {/* <div className="post-pagi-area">
                            <a href="#">
                                <i className="fas fa-angle-double-left"></i> Previus Post
                                <h5>Hello World</h5>
                            </a>
                            <a href="#">
                                Next Post <i className="fas fa-angle-double-right"></i>
                                <h5>The earth brown</h5>
                            </a>
                        </div> */}
                        {/* End Post Pagination */}

                       
                    </div>
                </div>
            </div>
        </div>
    </div>
            <FooterLayout/>
        </>
    );
}