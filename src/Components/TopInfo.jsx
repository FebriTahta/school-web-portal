export default function TopInfo() {
    return(
        <>
        <div className="top-bar-area bg-white text-light inline inc-border">
            <div className="container-full">
                <div className="row align-center">
                
                    <div className="col-lg-7 col-md-12 left-info">
                        <div className="item-flex">
                        <img src="/assets/web-01.png" className="logo" style={{width:"200px", position:"absolute", height:"300px", zIndex:"888", marginTop:"170px"}} alt="Logo" />
                            <ul className="list" >
                                {/* <li style={{color:"black"}}>
                                    <i className="fas fa-phone"></i> Have any question? (031) 8971207
                                </li> */}
                                {/* <li style={{color:"black"}}>
                                    <i className="fas fa-bullhorn"></i> <a href="#">Sepak Karir Alumni</a>
                                </li> */}
                                {/* <li>
                                    <i className="fas fa-briefcase"></i> <a href="#"></a>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 right-info">
                        <div className="item-flex">
                            <div className="social">
                                <ul>
                                    {/* <li>
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="#"><i className="fab fa-pinterest-p"></i></a>
                                    </li> */}
                                    <li >
                                        <i className="fas fa-phone" style={{color:"#FF1949"}}> </i> <span style={{color:"black", fontWeight:"600"}}> TELP SMK 1 KRIAN : (031) 8971207 </span>
                                    </li>
                                </ul>
                            </div>
                            <div className="button">
                                <a href="#"></a>
                                <a href="https://admin.smkskrian1.com/" target="_blank"><i className="fa fa-sign-in-alt"></i>Login</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}