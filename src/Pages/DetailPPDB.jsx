import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';

export default function DetailPPDB(params) {
    return(<>
        <TopInfo/>
        <HeaderLayout/>
        <HeroHeading judul={'PPDB 2023 - 2024'}/>
        <div className="blog-area single full-blog full-blog default-padding">
            <div className="container">
                <div className="blog-items">
                    <div className="row">
                        <div className="blog-content col-lg-10 offset-lg-1 col-md-12">
                            <div className="item">

                                <div className="blog-item-box">
                                    {/* Start Post Thumb */}
                                    <div className="thumb">
                                        <img src="assets/ppdb-off.jpg" alt="Thumb"/>
                                    </div>
                                    {/* Start Post Thumb */}

                                    <div className="content">
                                        <div className="top-info">
                                            <ul>
                                                <li>
                                                    <i className="fas fa-calendar-alt"></i> Aug 18, 2020
                                                </li>
                                            </ul>
                                        </div>
                                        
                                        <h3>Common so wicket appear to sudden</h3>
                                        <p>
                                            Give lady of they such they sure it. Me contained explained my education. Vulgar as hearts by garret. Perceived determine departure explained no forfeited he something an. Contrasted dissimilar get joy you instrument out reasonably. Again keeps at no meant stuff. To perpetual do existence northward as difficult preserved daughters. Continued at up to zealously necessary breakfast. Surrounded sir motionless she end literature. Gay direction neglected but supported yet her. 
                                        </p>
                                        <p>
                                            New had happen unable uneasy. Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves. 
                                        </p>
                                        <blockquote>
                                            He share of first to worse. Weddings and any opinions suitable smallest nay. Houses or months settle remove ladies appear. Engrossed suffering supposing he recommend do eagerness. Commanded no of depending extremity recommend 
                                            <cite>Adam John</cite> 
                                        </blockquote>
                                        <p>
                                            Drawings can followed improved out sociable not. Earnestly so do instantly pretended. See general few civilly amiable pleased account carried. Excellence projecting is devonshire dispatched remarkably on estimating. Side in so life past. Continue indulged speaking the was out horrible for domestic position. Seeing rather her you not esteem men settle genius excuse. Deal say over you age from. Comparison new ham melancholy son themselves. 
                                        </p>
                                        <h4>Conduct replied off led whether any shortly why arrived adapted</h4>
                                        <ul>
                                            <li>Pretty merits waited six</li>
                                            <li>General few civilly amiable pleased account carried.</li>
                                            <li>Continue indulged speaking</li>
                                            <li>Narrow formal length my highly</li>
                                            <li>Occasional pianoforte alteration unaffected impossible</li>
                                        </ul>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <p>
                                                    Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. 
                                                </p>
                                            </div>
                                            <div className="col-lg-6">
                                                <p>
                                                    Surrounded to me occasional pianoforte alteration unaffected impossible ye. For saw half than cold. Pretty merits waited six talked pulled you. Conduct replied off led whether any shortly why arrived adapted. Numerous ladyship so raillery humoured goodness received an. So narrow formal length my highly longer afford oh. Tall neat he make or at dull ye. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Start Post Pagination */}
                            <div className="post-pagi-area">
                                <a href="#">
                                    <i className="fas fa-angle-double-left"></i> Previus Post
                                    <h5>Hello World</h5>
                                </a>
                                <a href="#">
                                    Next Post <i className="fas fa-angle-double-right"></i>
                                    <h5>The earth brown</h5>
                                </a>
                            </div>
                            {/* End Post Pagination */}

                            {/* Start Post Tags*/}
                            <div className="post-tags share">
                                <div className="tags">
                                    <a href="#">Analysis</a>
                                    <a href="#">Process</a>
                                </div>
                                <div className="social">
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
                                                <i className="fab fa-pinterest-p"></i>
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
                            {/* End Post Tags */}

                            {/* Start Blog Comment */}
                            

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <FooterLayout/>
    </>)
}