export default function Banner(params) {
    return(
        <>
        <div className="banner-area bg-gray transparent-nav default bottom-large">
            <div id="bootcarousel" className="carousel text-light slide carousel-fade animate_text" data-ride="carousel">

                {/* Indicators for slides */}
                <div className="carousel-indicator">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <ol className="carousel-indicators">
                                    <li data-target="#bootcarousel" data-slide-to="0" className="active"></li>
                                    <li data-target="#bootcarousel" data-slide-to="1"></li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Wrapper for slides */}
                <div className="carousel-inner carousel-zoom">
                    <div className="carousel-item active">
                        <div className="slider-thumb bg-cover" style={{backgroundImage:"url(assets/img/ex_1.jpg)"}}></div>
                        <div className="box-table shadow dark" style={{height:"500px"}}>
                            <div className="box-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="content">
                                                <h2 data-animation="animated fadeInRight">About US <strong>SMK 1 KRIAN</strong></h2>
                                                <p data-animation="animated slideInLeft">
                                                    Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="slider-thumb bg-cover" style={{backgroundImage:"url(assets/img/ex_1.jpg)"}}></div>
                        <div className="box-table shadow dark" style={{height:"500px"}}>
                            <div className="box-cell">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="content">
                                                <h2 data-animation="animated fadeInRight">Our Goal is <strong>Achiving Success</strong></h2>
                                                <p data-animation="animated slideInLeft">
                                                    Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Wrapper for slides */}

                {/* Left and right controls */}
                <a className="left carousel-control light" href="#bootcarousel" data-slide="prev">
                    <i className="ti-angle-left"></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control light" href="#bootcarousel" data-slide="next">
                    <i className="ti-angle-right"></i>
                    <span className="sr-only">Next</span>
                </a>

            </div>
            
        </div>
        </>
    )
}