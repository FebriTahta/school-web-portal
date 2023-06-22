import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import SingleNewsList from '../Components/SingleNewsList';

export default function NewsList() {
    return(
        <>
            <TopInfo/>
            <HeaderLayout/>
            <HeroHeading/>
            <div className="blog-area full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items">
                        <div className="row">
                            <div className="blog-content col-lg-8 col-md-12">
                                <div className="blog-item-box">
                                    {/* Single Item */}
                                    <div className="single-item">
                                        <div className="row">
                                            <SingleNewsList/>
                                            <SingleNewsList/>
                                            <SingleNewsList/>
                                            <SingleNewsList/>
                                            <SingleNewsList/>
                                            <SingleNewsList/>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Pagination */}
                                <div className="row">
                                    <div className="col-md-12 pagi-area text-center">
                                        <nav aria-label="navigation">
                                            <ul className="pagination">
                                                <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-left"></i></a></li>
                                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                                <li className="page-item"><a className="page-link" href="#"><i className="fas fa-angle-double-right"></i></a></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            {/* Start Sidebar */}
                            <div className="sidebar col-lg-4 col-md-12">
                                <aside>
                                    <div className="sidebar-item search">
                                        <div className="sidebar-info">
                                            <form>
                                                <input type="text" name="text" className="form-control" />
                                                <button type="submit"><i className="fas fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="sidebar-item recent-post">
                                        <div className="title">
                                            <h4>Recent Post</h4>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="Thumb" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a href="#">Participate in staff meetingness manage dedicated</a>
                                                    <div className="meta-title">
                                                        <span className="post-date"><i className="fas fa-clock"></i> 12 Feb, 2020</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="Thumb" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a href="#">Future Plan & Strategy for Consutruction </a>
                                                    <div className="meta-title">
                                                        <span className="post-date"><i className="fas fa-clock"></i> 05 Jul, 2021</span>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="thumb">
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="Thumb" />
                                                    </a>
                                                </div>
                                                <div className="info">
                                                    <a href="#">Melancholy particular devonshire alteration</a>
                                                    <div className="meta-title">
                                                        <span className="post-date"><i className="fas fa-clock"></i> 29 Aug, 2020</span>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="sidebar-item category">
                                        <div className="title">
                                            <h4>category list</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li>
                                                    <a href="#">national <span>69</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">national <span>25</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">sports <span>18</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">megazine <span>37</span></a>
                                                </li>
                                                <li>
                                                    <a href="#">health <span>12</span></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-item gallery">
                                        <div className="title">
                                            <h4>Gallery</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="thumb" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="thumb" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="thumb" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="thumb" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="thumb" />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#">
                                                        <img src="assets/img/800x800.png" alt="thumb" />
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-item archives">
                                        <div className="title">
                                            <h4>Archives</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li><a href="#">Aug 2020</a></li>
                                                <li><a href="#">Sept 2020</a></li>
                                                <li><a href="#">Nov 2020</a></li>
                                                <li><a href="#">Dec 2020</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-item social-sidebar">
                                        <div className="title">
                                            <h4>follow us</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li className="facebook">
                                                    <a href="#">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </a>
                                                </li>
                                                <li className="twitter">
                                                    <a href="#">
                                                        <i className="fab fa-twitter"></i>
                                                    </a>
                                                </li>
                                                <li className="pinterest">
                                                    <a href="#">
                                                        <i className="fab fa-pinterest"></i>
                                                    </a>
                                                </li>
                                                <li className="g-plus">
                                                    <a href="#">
                                                        <i className="fab fa-google-plus-g"></i>
                                                    </a>
                                                </li>
                                                <li className="linkedin">
                                                    <a href="#">
                                                        <i className="fab fa-linkedin-in"></i>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="sidebar-item tags">
                                        <div className="title">
                                            <h4>tags</h4>
                                        </div>
                                        <div className="sidebar-info">
                                            <ul>
                                                <li><a href="#">Fashion</a>
                                                </li>
                                                <li><a href="#">Education</a>
                                                </li>
                                                <li><a href="#">nation</a>
                                                </li>
                                                <li><a href="#">study</a>
                                                </li>
                                                <li><a href="#">health</a>
                                                </li>
                                                <li><a href="#">food</a>
                                                </li>
                                                <li><a href="#">travel</a>
                                                </li>
                                                <li><a href="#">science</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </aside>
                            </div>
                            {/* End Start Sidebar */}
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout/>
        </>
    )
}