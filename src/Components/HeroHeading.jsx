import { useNavigate, NavLink } from "react-router-dom"
export default function HeroHeading(props) {
    return(
        <>
            <div className="breadcrumb-area bg-gray text-center shadow dark text-light bg-cover" style={{backgroundImage: "url(/assets/img/bg-head.png)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h1>{props.judul}</h1>
                            <ul className="breadcrumb">
                                <li><NavLink to='/'><i className="fas fa-home"></i> Home</NavLink></li>
                                <li className="active">{props.judul}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}