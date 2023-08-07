import FooterLayout from "../Layouts/FooterLayout";

export default function ReadNews(props) {
    
    return (
        <>
            <div className="item"> 

                <div className="blog-item-box">
                    {/* Start Post Thumb */}
                    <div className="thumb">
                        <img style={{width:"100%"}} src={props.news_image} alt="Thumb" />
                    </div>
                    {/* Start Post Thumb */}

                    <div className="content">
                        <div className="top-info">
                            <ul>
                                <li className="logosmk">
                                    <a href="#"><img src="/assets/logo-smk.png" alt="Author" />SMK 1 Krian</a>
                                </li>
                                <li>
                                    <i className="fas fa-calendar-alt"></i> {props.news_bulan} {props.news_tanggal}, {props.news_tahun}
                                </li>
                            </ul>
                        </div>
                        <h3>{props.news_title}</h3>
                        <div className="text-desc" style={{textAlign:"left"}}
                            dangerouslySetInnerHTML={{ __html: props.news_desc }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}