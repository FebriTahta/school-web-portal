import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import { useNavigate, NavLink } from "react-router-dom"
import {useEffect,useState} from "react"

export default function Jurusan() {

    const [dataJurusan, setJurusan] = useState([]);
    const ApiJurusan = "https://admin.smkskrian1.com/api/daftar-jurusan";
    const jurusan_image = "http://admin.smkskrian1.com/image_jurusan/";
    const navigate = useNavigate();

    const daftarJurusan = async () => {
        try {
            const data = await fetch(ApiJurusan);
            const response = await data.json();
            setJurusan(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    const handleGoToDetailJurusan = (jurusan_slug) => {
        navigate(`/detail-jurusan/${jurusan_slug}`);
    }

    useEffect(()=>{
        daftarJurusan();
    },[]);
    
    return(
        <>
            <TopInfo/>
            <HeaderLayout/>
            <HeroHeading judul={'Daftar Jurusan'}/>
            <div className="course-area default-padding bottom-less">
                <div className="container">
                    <div className="courses-box">
                        <div className="row">
                            {/* Single item */}
                            {(dataJurusan ? dataJurusan.map((a,i)=>{
                                return <div key={i} className="single-item col-lg-4 col-md-6">
                                    <div className="item">
                                        <div className="thumb">
                                            <img style={{width:"100%", objectFit:"cover",height:"220px"}} src={jurusan_image+a.jurusan_image} alt="Thumb" />
                                            <div className="price">
                                                <h5>JURUSAN</h5>
                                            </div>
                                        </div>
                                        <div className="info">
                                            <div className="top-info">
                                                <div className="top-meta">
                                                    <ul>
                                                        <li><i className="fas fa-user"></i> {a.jurusan_anak} Anak</li>
                                                        <li><i className="fas fa-list-ul"></i> {a.jurusan_kelas} Kelas</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <h4>
                                                <a href="#" onClick={()=>handleGoToDetailJurusan(a.jurusan_slug)}>{a.jurusan_name}</a>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            }) :null)}
                            {/* End Single item */}
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout/>
        </>
    );
}