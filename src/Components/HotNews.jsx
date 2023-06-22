export default function HotNews(params) {
    return(
        <>
        <div className="event-area default-padding bottom-less">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h5 style={{marginBottom:"0px"}}>Upcoming & Recent Education Events / News</h5>
                            <h2>News List</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="event-box">
                    <div className="row">
                        {/* Single Event */}
                        <div className="single-item col-lg-6">
                            <div className="item">
                                <div className="thumb">
                                    <img src="/assets/img/ex_1.jpg" alt="Thumb"/>
                                </div>
                                <div className="info">
                                    <div className="content">
                                        <div className="top-info">
                                            <ul>
                                                <li><i className="fas fa-calendar-alt"></i> December 25, 2020</li>
                                                <li><i className="fas fa-clock"></i> 8:00 AM - 5:00 PM</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <a href="#">International Conference on Art</a>
                                        </h4>
                                        <p>
                                            Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                                        </p>
                                        <div className="bottom-info">
                                            <div className="location">
                                                <i className="fas fa-map-marker-alt"></i>
                                                California, TX 70240
                                            </div>
                                            <a href="#" className="btn circle btn-theme effect btn-sm">Join Event</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                        {/* End Single Event */}
                        <div className="single-item col-lg-6">
                            <div className="single-event col-lg-12">
                                <div className="event-box  recent-news">
                                    <div className="row">
                                        <div className="col-lg-4 col-4 item thumb" style={{backgroundImage:"url(assets/img/6.jpg)"}}>
                                        </div>
                                        <div className="col-lg-8 col-8">
                                            <div className="content" style={{padding:"5%"}}>
                                                <h5>
                                                    <a href="#">Discussion: Explorations of new approaches</a>
                                                </h5>
                                                <p className="text">
                                                    Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it.
                                                </p>
                                                <p className="tanggal-berita">
                                                    <i className="fa fa-calendar-alt"></i> 19 April 2023
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-event col-lg-12 ">
                                <div className="event-box recent-news">
                                    <div className="row">
                                        <div className="col-lg-4 col-4 item thumb" style={{backgroundImage:"url(assets/img/5.jpg)"}}>
                                        </div>
                                        <div className="col-lg-8 col-8">
                                            <div className="content" style={{padding:"5%"}}>
                                                <h5>
                                                    <a href="#">Discussion: Explorations of new approaches</a>
                                                </h5>
                                                <p className="text">
                                                    Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it.
                                                </p>
                                                <p className="tanggal-berita">
                                                    <i className="fa fa-calendar-alt"></i> 19 April 2023
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="single-event col-lg-12">
                                <a href="#" className="btn circle btn-theme effect btn-sm">Read All News </a>
                            </div>
                        </div>
                        {/* End Single Event */}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}