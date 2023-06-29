import SingleTeamList from "../Components/SingleTeamList"
import { useNavigate, NavLink } from "react-router-dom"
import {useEffect,useState} from "react"

export default function Advisor(params) {
    const class_advisor = "class-advisor";

    const scrolladvisorleft = () => {
        document.getElementById("slide-advisor").scrollLeft -= 330;
    }

    const scrolladvisorright = () => {
        document.getElementById("slide-advisor").scrollLeft += 330;
    }

    const [previewGuru, setpreviewGuru] = useState([]);
    const ApiGuru = "https://admin.smkskrian1.com/api/preview-guru";
    const guru_image = "https://admin.smkskrian1.com/image_guru/";

    const daftarpreviewGuru = async () => {
        try {
            const data = await fetch(ApiGuru);
            const response = await data.json();
            setpreviewGuru(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    useEffect(()=>{
        daftarpreviewGuru();
    },[]);

    return(
        <>
            <div className="advisor-area carousel-shadow default-padding">
                <div className="container">
                    <div className="heading-left">
                        <div className="row">
                            <div className="col-lg-5">
                                <h5>Expert Educator</h5>
                                <h2>
                                    Our professional & Expert Educator
                                </h2>
                            </div>
                            <div className="col-lg-6 offset-lg-1">
                                <p>
                                    SMK 1 Krian mempunyai guru yang berkompeten dan berprestasi dibidangnya. Percayakan kualitas pendidikan anda kepada kami
                                </p>
                                <NavLink className="btn btn-md btn-dark border" to='/daftar-guru'>View All <i className="fas fa-plus"></i></NavLink>
                                <button onClick={scrolladvisorleft} style={{backgroundColor:"gray",color:"white"  ,marginLeft:"25px",marginRight:"15px",fontSize:"20px",padding:"10px",width:"50px", height:"50px",borderRadius:"50%"}}><i className="fa fa-chevron-left"></i></button>
                                <button onClick={scrolladvisorright} style={{backgroundColor:"gray",color:"white"  , marginLeft:"10px",fontSize:"20px",padding:"10px",width:"50px",height:"50px",borderRadius:"50%"}}><i className="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="advisor-items text-center slide-advisor" id="slide-advisor" style={{display:"flex",justifyContent:"start",overflowX:"auto",scrollBehavior:"smooth",marginBottom:"10px"}}>
                        {(previewGuru ? previewGuru.map((a,i)=>{
                            return <SingleTeamList key={i} guru_wa={a.guru_wa} guru_name={a.guru_name} 
                            guru_image={guru_image+a.guru_image} guru_jabatan={a.guru_jabatan} class={class_advisor}/>
                        }):null)}
                        {/* <SingleTeamList nama={nama} class={class_advisor}/> */}
                    </div>
                </div>
            </div>
        </>
    )
}