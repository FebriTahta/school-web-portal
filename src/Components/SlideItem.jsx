export default function SlideItem(params) {

    const scrollslideitemleft = () => {
        document.getElementById("slide-item").scrollLeft -= 330;
    }

    const scrollslideitemright = () => {
        document.getElementById("slide-item").scrollLeft += 330;
    }

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
                <button onClick={scrollslideitemleft} style={{backgroundColor:"white",marginRight:"15px",fontSize:"20px",padding:"10px",width:"50px", height:"50px",borderRadius:"50%"}}><i className="fa fa-chevron-left"></i></button>
                <button onClick={scrollslideitemright} style={{backgroundColor:"white", marginLeft:"15px", marginRight:"30px",fontSize:"20px",padding:"10px",width:"50px",height:"50px",borderRadius:"50%"}}><i className="fa fa-chevron-right"></i></button>
                <a href="#" className="btn circle btn-theme effect btn-sm" >SEMUA JURUSAN </a>
            </div>
            <div className="container-full slide-item" id="slide-item" style={{display:"flex",justifyContent:"start",overflowX:"auto",scrollBehavior:"smooth",marginBottom:"10px"}}>
                <div style={{paddingRight:"30px"}}>
                    <div className="item item-mobile" style={{width:"330px"}}>
                        <div className="title">
                            <i className="flaticon-innovation"></i>
                            <h4><a href="#">Artificial Intelligence</a></h4>
                        </div>
                        <div className="thumb">
                            <span>18 Kelas / Angkatan</span>
                            <img src="/assets/img/800x600.png" alt="Thumb" />
                        </div>
                    </div>
                </div>
                <div style={{paddingRight:"30px"}}>
                    <div className="item item-mobile" style={{width:"330px"}}>
                        <div className="title">
                            <i className="flaticon-innovation"></i>
                            <h4><a href="#">Artificial Intelligence</a></h4>
                        </div>
                        <div className="thumb">
                            <span>18 Kelas / Angkatan</span>
                            <img src="/assets/img/800x600.png" alt="Thumb" />
                        </div>
                    </div>
                </div>
                <div style={{paddingRight:"30px"}}>
                    <div className="item item-mobile" style={{width:"330px"}}>
                        <div className="title">
                            <i className="flaticon-innovation"></i>
                            <h4><a href="#">Artificial Intelligence</a></h4>
                        </div>
                        <div className="thumb">
                            <span>18 Kelas / Angkatan</span>
                            <img src="/assets/img/800x600.png" alt="Thumb" />
                        </div>
                    </div>
                </div>
                <div style={{paddingRight:"30px"}}>
                    <div className="item item-mobile" style={{width:"330px"}}>
                        <div className="title">
                            <i className="flaticon-innovation"></i>
                            <h4><a href="#">Artificial Intelligence</a></h4>
                        </div>
                        <div className="thumb">
                            <span>18 Kelas / Angkatan</span>
                            <img src="/assets/img/800x600.png" alt="Thumb" />
                        </div>
                    </div>
                </div>
                <div style={{paddingRight:"30px"}}>
                    <div className="item item-mobile"style={{width:"330px"}}>
                        <div className="title">
                            <i className="flaticon-innovation"></i>
                            <h4><a href="#">Artificial Intelligence</a></h4>
                        </div>
                        <div className="thumb">
                            <span>18 Kelas / Angkatan</span>
                            <img src="/assets/img/800x600.png" alt="Thumb" />
                        </div>
                    </div>
                </div>
                <div style={{paddingRight:"30px"}}>
                    <div className="item item-mobile" style={{width:"330px"}}>
                        <div className="title">
                            <i className="flaticon-innovation"></i>
                            <h4><a href="#">Artificial Intelligence</a></h4>
                        </div>
                        <div className="thumb">
                            <span>8 Kelas / Angkatan</span>
                            <img src="/assets/img/800x600.png" alt="Thumb" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}