export default function Promo(params) {
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
                                <a className="btn circle btn-md btn-gradient" href="#">Explore Karir Alumni</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}