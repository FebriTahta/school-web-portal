import { useNavigate, NavLink } from "react-router-dom"
export default function Promo(params) {
    const navigate = useNavigate();

    return(
        <>
            <div className="about-area inc-fixed-bg default-padding-bottom" style={{marginTop:"30px"}}>
                {/* Fixed BG*/}
                <div className="fixed-bg" style={{backgroundImage:"url(/assets/img/illustration/6.png)"}}></div>
                {/* End Fixed BG*/}
                <div className="container">
                    <div className="about-items">
                        <div className="row align-center">
                            
                            <div className="col-lg-6 info">
                                <h2>
                                    Karir Alumni
                                </h2>
                                <p>
                                    kami memantau setiap perkembangan karir alumni kami dengan melakukan pendataan karir. hal ini akan meningkatkan kepercayaan publik tentang kesuksesan setelah menempuh pendidikan di lembaga kami
                                </p>
                                <NavLink className="btn circle btn-md btn-gradient" to={"/alumni"} href="#">Explore Karir Alumni</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}