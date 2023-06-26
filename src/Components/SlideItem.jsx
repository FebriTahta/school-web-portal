import {useEffect,useState} from "react"

export default function SlideItem(params) {

    const scrollslideitemleft = () => {
        document.getElementById("slide-item").scrollLeft -= 330;
    }

    const scrollslideitemright = () => {
        document.getElementById("slide-item").scrollLeft += 330;
    }

    const [previewJurusan, setpreviewJurusan] = useState([]);
    const ApiJurusan = "http://127.0.0.1:8000/api/preview-jurusan";
    const jurusan_image = "http://127.0.0.1:8000/image_jurusan/";

    const daftarpreviewJurusan = async () => {
        try {
            const data = await fetch(ApiJurusan);
            const response = await data.json();
            setpreviewJurusan(response.data);

        }   catch (err) { 
            console.log(err);
        }
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
                <a href="#" className="btn circle btn-theme effect btn-sm" >SEMUA JURUSAN </a>
            </div>
            <div className="container-full slide-item" id="slide-item" style={{display:"flex",justifyContent:"start",overflowX:"auto",scrollBehavior:"smooth",marginBottom:"10px"}}>
                {(previewJurusan ? previewJurusan.map((a, i)=> {
                    return <div key={i} style={{paddingRight:"30px"}}>
                    <div className="item item-mobile" style={{width:"330px"}}>
                        <div className="title">
                            <i className="flaticon-innovation"></i>
                            <h4><a href="#"  className="nama-jurusan">{a.jurusan_name}</a></h4>
                        </div>
                        <div className="thumb">
                            <span>PREVIEW</span>
                            <img src={jurusan_image+a.jurusan_image} className="image-jurusan-home" alt="Thumb" />
                        </div>
                    </div>
                </div>
                }) : null)}
            </div>
        </div>
        </>
    )
}