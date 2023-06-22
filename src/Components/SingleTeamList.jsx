export default function SingleTeamList(props) {
    return(
        <>
            <div className="single-item col-lg-3 col-md-6">
                <div className={props.class}>
                    <div className="item">
                        <div className="thumb">
                            <img src="/assets/img/800x800.png" alt="Thumb" />
                            {/* <ul>
                                <li className="facebook">
                                    <a href="#0">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a href="#0">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="linkedin">
                                    <a href="#0">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                        <div className="info">
                            <h4><a href="#0">{props.nama}</a></h4>
                            <span>Science specialist</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}