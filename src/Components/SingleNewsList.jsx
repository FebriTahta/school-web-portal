import { NavLink, useNavigate } from "react-router-dom";

export default function SingleNewsList(props){
    
    const navigate = useNavigate();
    
    const handleGoToDetailNews = (news_slug) => {
        navigate(`/baca-berita/${news_slug}`);
        // console.log(news_slug);
    }

    return(
        <>
            <div className="col-md-6 mb-5">
                <div className="item">
                    <div className="thumb">
                        <a href="#" onClick={() => handleGoToDetailNews(props.news_slug)}><img src={props.news_image} alt="Thumb"/></a>
                        <div className="date">
                            <strong>{props.news_tanggal} </strong> {props.news_bulan}
                        </div>
                    </div>
                    <div className="content" style={{marginTop:"20px"}}>
                        {props.news_tag.map((a,i)=>{
                            return <span key={i} style={{marginRight:"5px"}} className="badge badge-danger">{a.kategori_name}</span>
                        })}
                        <h4 style={{fontSize:"18px",marginTop:"10px"}}><a href="#" onClick={() => handleGoToDetailNews(props.news_slug)}>{props.news_title.substring(0,50)}...</a></h4>
                        <p>
                            {props.news_desc.replace(/(<([^>]+)>)/gi, "").substring(0,100)}...
                        </p>
                    </div>
                    <div className="bottom-info">
                        <span><i className="fas fa-user"></i> SMK 1 Krian</span>
                        <a className="btn-more" href="#" onClick={() => handleGoToDetailNews(props.news_slug)}>Read More <i className="arrow_right"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}