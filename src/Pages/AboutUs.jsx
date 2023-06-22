import HeaderLayout from '../Layouts/HeaderLayout'
import FooterLayout from '../Layouts/FooterLayout'
import TopInfo from '../Components/TopInfo'
import HeroHeading from '../Components/HeroHeading'
import VisiMisi from '../Components/VisiMisi'
import SejarahSingkat from '../Components/SejarahSingkat'

export default function AboutUs(params) {
    return(
        <>
            <TopInfo/>
            <HeaderLayout/>
            <HeroHeading/>
            <div className="course-details-area default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 info">

                            <div className="top-info">
                                <h2>Informasi Seputar <br/> SMK KRIAN 1 SIDOARJO</h2>
                            </div>

                            <div className="main-content">
                                <div className="center-tabs">
                                    <ul id="tabs" className="nav nav-tabs">
                                        <li className="nav-item">
                                            <a href="" data-target="#tab1" data-toggle="tab" className="active nav-link">Sejarah Singkat</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" data-target="#tab2" data-toggle="tab" className="nav-link">Visi Misi</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" data-target="#tab3" data-toggle="tab" className="nav-link">Pimpinan</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="" data-target="#tab4" data-toggle="tab" className="nav-link">Kependidikan</a>
                                        </li>
                                    </ul>
                                    <div id="tabsContent" className="tab-content">
                                        <div id="tab1" className="tab-pane overview fade active show">
                                            <SejarahSingkat></SejarahSingkat>
                                        </div>
                                        <div id="tab2" className="tab-pane curriculum fade">
                                            <VisiMisi></VisiMisi>
                                        </div>
                                        <div id="tab3" className="tab-pane advisor fade">
                                            <div className="advisor-items">
                                                {/* Single Item */}
                                                <div className="single-item">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 thumb">
                                                            <img src="	http://smkkrian1.sch.id/wp-content/uploads/2016/10/1-Dhini-Mekarsari-S.Pd_.-M.MPd_.-225x300.jpg" alt="Advisor" />
                                                        </div>
                                                        <div className="col-lg-8 col-md-8 info">
                                                            <h4>Jones Mark</h4>
                                                            <span>Java Programmer</span>
                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star-half-alt"></i>
                                                                <span>4.8 (867)</span>
                                                            </div>
                                                            <p>
                                                                Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described. 
                                                            </p>
                                                            <ul>
                                                                <li><i className="fas fa-play"></i> 12 Courses</li>
                                                                <li><i className="fas fa-comment-alt"></i> 867 Rating</li>
                                                                <li><i className="fas fa-users"></i> 4k Students</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Single Item */}
                                                {/* Single Item */}
                                                <div className="single-item">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-4 thumb">
                                                            <img src="http://smkkrian1.sch.id/wp-content/uploads/2016/10/5-Ahmad-Robby.jpg" alt="Advisor" />
                                                        </div>
                                                        <div className="col-lg-8 col-md-8 info">
                                                            <h4>Adom Mohaa</h4>
                                                            <span>Professor</span>
                                                            <div className="rating">
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star"></i>
                                                                <i className="fas fa-star-half-alt"></i>
                                                                <span>4.8 (867)</span>
                                                            </div>
                                                            <p>
                                                                Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described. 
                                                            </p>
                                                            <ul>
                                                                <li><i className="fas fa-play"></i> 12 Courses</li>
                                                                <li><i className="fas fa-comment-alt"></i> 867 Rating</li>
                                                                <li><i className="fas fa-users"></i> 4k Students</li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* End Single Item */}
                                            </div>
                                        </div>
                                        <div id="tab4" className="tab-pane reviews fade">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="avg-ratings">
                                                        <h2>4.9</h2>
                                                        <div className="rating">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star-half-alt"></i>
                                                        </div>
                                                        1,455 Ratings
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 rating-counter">
                                                    <ul>
                                                        <li>
                                                            <span>5 Star</span>
                                                            <span>13</span>
                                                            <div className="rating-bar"></div>
                                                        </li>
                                                        <li>
                                                            <span>4 Star</span>
                                                            <span>1</span>
                                                            <div className="rating-bar"></div>
                                                        </li>
                                                        <li>
                                                            <span>3 Star</span>
                                                            <span>0</span>
                                                            <div className="rating-bar"></div>
                                                        </li>
                                                        <li>
                                                            <span>2 Star</span>
                                                            <span>1</span>
                                                            <div className="rating-bar"></div>
                                                        </li>
                                                        <li>
                                                            <span>1 Star</span>
                                                            <span>0</span>
                                                            <div className="rating-bar"></div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="rating-provider">
                                                {/* Single Item */}
                                                <div className="single-item">
                                                    <div className="thumb">
                                                        <img src="assets/img/800x800.png" alt="Thumb" />
                                                    </div>
                                                    <div className="info">
                                                        <div className="title">
                                                            <h4>Mira Jone</h4>
                                                            <span>15 December, 2020</span>
                                                        </div>
                                                        <div className="rating">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                Agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least. 
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item */}
                                                {/* Single Item */}
                                                <div className="single-item">
                                                    <div className="thumb">
                                                        <img src="assets/img/800x800.png" alt="Thumb" />
                                                    </div>
                                                    <div className="info">
                                                        <div className="title">
                                                            <h4>Mira Jone</h4>
                                                            <span>15 December, 2020</span>
                                                        </div>
                                                        <div className="rating">
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star"></i>
                                                            <i className="fas fa-star-half-alt"></i>
                                                        </div>
                                                        <div className="content">
                                                            <p>
                                                                Agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least. 
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* Single Item */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-lg-4 sidebar">
                            {/* Single Item */}
                            <div className="item course-preview">
                                <div className="thumb">
                                    <img src="assets/img/800x600.png" alt="Thumb" />
                                    <a href="https://youtu.be/VUM2FexoRsM" className="popup-youtube light video-play-button item-center">
                                        <i className="fa fa-play"></i>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="top">
                                        <div className="pricce">
                                            <h2>$32</h2>
                                        </div>
                                        <div className="rating">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star-half-alt"></i>
                                            <span>4.8 (867)</span>
                                        </div>
                                    </div>
                                    <div className="course-includes">
                                        <ul>
                                            <li>
                                                <i className="fas fa-copy"></i> Lectures <span className="float-right">8</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-clock"></i> Duration <span className="float-right">5.7 Hours</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-sliders-h"></i> Skill level <span className="float-right">All Levels</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-language"></i> Language <span className="float-right">English</span>
                                            </li>
                                            <li>
                                                <i className="fas fa-users"></i> Students <span className="float-right">12K</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <a className="btn btn-theme effect btn-sm" href="#">Enroll Now</a>
                                </div>
                            </div>
                            {/* Single Item */}

                            {/* Single Item */}
                            <div className="item course-category">
                                <div className="content">
                                    <h4>Course categories</h4>
                                    <ul>
                                        <li>
                                            <a href="#">Java Programming <span>23</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Social Science <span>0</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Business Management <span>12</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Online Learning <span>17</span></a>
                                        </li>
                                        <li>
                                            <a href="#">Course Management <span>0</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* End Single Item */}

                            {/* Single Item */}
                            <div className="item related-course">
                                <div className="content">
                                    <h4>Related Courses</h4>
                                    <div className="related-courses-items">
                                        <div className="item">
                                            <div className="content">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="Thumb" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <h5>
                                                        <a href="#">How to Make Beautiful Landscape photos?</a>
                                                    </h5>
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                        <span>4.5 (1.3k)</span>
                                                    </div>
                                                    <div className="meta">
                                                        <i className="fas fa-user"></i> By <a href="#">Tami Bua</a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="content">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="Thumb" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <h5>
                                                        <a href="#">Learn PHP Programming From Scratch</a>
                                                    </h5>
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                        <span>4.5 (6k)</span>
                                                    </div>
                                                    <div className="meta">
                                                        <i className="fas fa-user"></i> By <a href="#">John Bro</a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="content">
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="Thumb" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <h5>
                                                        <a href="#">Profession paython learing</a>
                                                    </h5>
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star-half-alt"></i>
                                                        <span>4.5 (23k)</span>
                                                    </div>
                                                    <div className="meta">
                                                        <i className="fas fa-user"></i> By <a href="#">Spany Paul</a> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Item */}
                            
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout/>
        </>
    )
}