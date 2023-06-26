import FooterLayout from "../Layouts/FooterLayout";

export default function ReadNews(props) {
    return (
        <>
            <div className="item">

                <div className="blog-item-box">
                    {/* Start Post Thumb */}
                    <div className="thumb">
                        <img src={props.news_image} alt="Thumb" />
                    </div>
                    {/* Start Post Thumb */}

                    <div className="content">
                        <div className="top-info">
                            <ul>
                                <li>
                                    <a href="#"><img src="/assets/img/100x100.png" alt="Author" />Jones Alex</a>
                                </li>
                                <li>
                                    <i className="fas fa-calendar-alt"></i> Aug 18, 2020
                                </li>
                            </ul>
                        </div>
                        <h3>{props.news_title}</h3>
                        <div
                            dangerouslySetInnerHTML={{ __html: props.news_desc }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}