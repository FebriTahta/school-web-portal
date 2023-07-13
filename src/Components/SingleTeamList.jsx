export default function SingleTeamList(props) {
    return(
        <>
            <div className="single-item col-lg-3 col-md-6 col-sm-6 col-6" style={{marginRight:"50px"}}>
                <div className={props.class}>
                    <div className="item">
                        <div className="thumb">
                            <a href={"https://wa.me/"+props.guru_wa}>
                                <img src={props.guru_image} alt="Thumb" />
                            </a>
                            <ul>
                                <li className="facebook">
                                    <a href={"https://wa.me/"+props.guru_wa} target="_blank" style={{backgroundColor:"green"}}>
                                        <i className="fab fa-whatsapp"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="info" style={{marginBottom:"0"}}>
                            <div className="nama-guru-all">
                                <h4 ><a href="#0">{props.guru_name}</a></h4>
                            </div>
                            <div className="nama-jabatan-all">
                                <h4>{props.guru_jabatan}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}