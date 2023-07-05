import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import { NavLink, useNavigate } from "react-router-dom";

export default function InfoPPDB(params) {
    return(<>
        <TopInfo/>
        <HeaderLayout/>
        <HeroHeading judul={'Informasi PPDB'}/>
        <div className="event-area default-padding bottom-less">
            <div className="container">
                <div className="event-box">
                    <div className="row">
                        {/* Single Event */}
                        <div className="single-item col-lg-6">
                            <div className="item">
                                <div className="thumb">
                                    <img src="/assets/ppdb-on.jpeg" style={{objectFit:"cover", width:"100%", height:"450px"}} alt="Thumb" />
                                </div>
                                <div className="info">
                                    <div className="content">
                                        <div className="top-info">
                                            <ul>
                                                <li><i className="fas fa-calendar-alt"></i> Agustus 23, 2020</li>
                                                <li><i className="fas fa-clock"></i> 8:00 AM - 5:00 PM</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <NavLink href="#" to={'detail-ppdb'}>PPDB / 2023 - 2024</NavLink>
                                        </h4>
                                        <p>
                                            Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                                        </p>
                                        <div className="bottom-info">
                                            <div className="location">
                                                <i className="fas fa-map-marker-alt"></i>
                                                SMK 1 KRIAN
                                            </div>
                                            <NavLink href="#" to={'detail-ppdb'} className="btn circle btn-theme effect btn-sm">Selengkapnya</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Event */}
                        {/* Single Event */}
                        <div className="single-item col-lg-6">
                            <div className="item">
                                <div className="thumb">
                                    <img src="/assets/ppdb-off.jpg" style={{objectFit:"cover", width:"100%", height:"450px"}} alt="Thumb" />
                                </div>
                                <div className="info">
                                    <div className="content">
                                        <div className="top-info">
                                            <ul>
                                                <li><i className="fas fa-calendar-alt"></i> January 18, 2022</li>
                                                <li><i className="fas fa-clock"></i> 9:00 AM - 7:00 PM</li>
                                            </ul>
                                        </div>
                                        <h4>
                                            <NavLink  href="#" to={'/detail-ppdb'}>PPDB / 2022 - 2023</NavLink>
                                        </h4>
                                        <p>
                                            Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
                                        </p>
                                        <div className="bottom-info">
                                            <div className="location">
                                                <i className="fas fa-map-marker-alt"></i>
                                                SMK KRIAN 1
                                            </div>
                                            <NavLink href="#" className="btn circle btn-theme effect btn-sm" to={'/detail-ppdb'}>Selengkapnya</NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* End Single Event */}
                    </div>
                </div>
            </div>
        </div>
        <FooterLayout/>
    </>)
}