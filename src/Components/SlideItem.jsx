import {useEffect,useState} from "react"
import { useNavigate, NavLink } from "react-router-dom"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function SlideItem(params) {
    const [isLoading, setIsLoading] = useState(true);
    const scrollslideitemleft = () => {
        document.getElementById("slide-item").scrollLeft -= 330;
    }

    const scrollslideitemright = () => {
        document.getElementById("slide-item").scrollLeft += 330;
    }

    const [previewJurusan, setpreviewJurusan] = useState([]);
    const ApiJurusan = "https://admin.smkskrian1.com/api/preview-jurusan";
    const jurusan_image = "https://admin.smkskrian1.com/image_jurusan/";

    const daftarpreviewJurusan = async () => {
        setIsLoading(true)
        try {
            const data = await fetch(ApiJurusan);
            const response = await data.json();
            setpreviewJurusan(response.data);

        }   catch (err) { 
            console.log(err);
        }
        setIsLoading(false)
    }

    useEffect(()=>{
        daftarpreviewJurusan();
    },[]);

    return(
        <>
        <div className="categories-area bg-gray carousel-shadow thumb-cats" style={{paddingTop:"50px", paddingBottom:"50px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h5 style={{marginBottom:"0px"}}>Daftar Jurusan Yang Tersedia</h5>
                            <h2>Jurusan Bergengsi</h2>
                        </div>
                    </div>
                </div>                
            </div>
            <div className="container-full" style={{marginBottom:"20px",right:"0"}}>
                <button onClick={scrollslideitemleft} style={{backgroundColor:"white",marginRight:"10px",fontSize:"20px",padding:"10px",width:"50px", height:"50px",borderRadius:"50%"}}><i className="fa fa-chevron-left"></i></button>
                <button onClick={scrollslideitemright} style={{backgroundColor:"white", marginLeft:"10px", marginRight:"20px",fontSize:"20px",padding:"10px",width:"50px",height:"50px",borderRadius:"50%"}}><i className="fa fa-chevron-right"></i></button>
                <NavLink to={'/daftar-jurusan'} href="#" className="btn circle btn-theme effect btn-sm" >SEMUA JURUSAN </NavLink>
            </div>
            <div className="container-full slide-item" id="slide-item" style={{display:"flex",justifyContent:"start",overflowX:"auto",scrollBehavior:"smooth",marginBottom:"10px"}}>

                {
                    isLoading ? (
                        <div style={{ display: 'flex' }}>
                            <Skeleton count={5}/>
                        </div>
                        ) : (previewJurusan ? previewJurusan.map((a, i)=> {
                        return <div key={i} style={{paddingRight:"30px"}}>
                            <div className="item item-mobile" style={{width:"330px"}}>
                                <div className="title nama-jurusan">
                                    <i className="flaticon-innovation"></i>
                                    <h4><a href="#"  className="nama-jurusan">{a.jurusan_name}</a></h4>
                                </div>
                                <div className="thumb">
                                    <span>{a.jurusan_anak+" anak "+a.jurusan_kelas+" kelas"}</span>
                                    <img src={jurusan_image+a.jurusan_image} className="image-jurusan-home" alt="Thumb" />
                                </div>
                            </div>
                        </div>
                    }) : null)
                }
                {/* {(previewJurusan ? previewJurusan.map((a, i)=> {
                    return <div key={i} style={{paddingRight:"30px"}}>
                    <div className="item item-mobile" style={{width:"330px"}}>
                        <div className="title nama-jurusan">
                            <i className="flaticon-innovation"></i>
                            <h4><a href="#"  className="nama-jurusan">{a.jurusan_name}</a></h4>
                        </div>
                        <div className="thumb">
                            <span>{a.jurusan_anak+" anak "+a.jurusan_kelas+" kelas"}</span>
                            <img src={jurusan_image+a.jurusan_image} className="image-jurusan-home" alt="Thumb" />
                        </div>
                    </div>
                </div>
                }) : null)} */}
            </div>
        </div>
        </>
    )
}