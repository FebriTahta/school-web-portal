export default function HeroHeading() {
    return(
        <>
            <div className="breadcrumb-area bg-gray text-center shadow dark text-light bg-cover" style={{backgroundImage: "url(assets/img/2440x1578.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>Blog</h1>
                            <ul className="breadcrumb">
                                <li><a href="#"><i className="fas fa-home"></i> Home</a></li>
                                <li className="active">News</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}