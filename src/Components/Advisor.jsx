import SingleTeamList from "../Components/SingleTeamList"

export default function Advisor(params) {
    const nama = "Febri Tahta";
    const class_advisor = "class-advisor";

    const scrolladvisorleft = () => {
        document.getElementById("slide-advisor").scrollLeft -= 330;
    }

    const scrolladvisorright = () => {
        document.getElementById("slide-advisor").scrollLeft += 330;
    }
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
                                <a className="btn btn-md btn-dark border" href="#">View All <i className="fas fa-plus"></i></a>
                                <button onClick={scrolladvisorleft} style={{backgroundColor:"gray",color:"white"  ,marginLeft:"30px",marginRight:"15px",fontSize:"20px",padding:"10px",width:"50px", height:"50px",borderRadius:"50%"}}><i className="fa fa-chevron-left"></i></button>
                                <button onClick={scrolladvisorright} style={{backgroundColor:"gray",color:"white"  , marginLeft:"15px", marginRight:"30px",fontSize:"20px",padding:"10px",width:"50px",height:"50px",borderRadius:"50%"}}><i className="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="advisor-items text-center slide-advisor" id="slide-advisor" style={{display:"flex",justifyContent:"start",overflowX:"auto",scrollBehavior:"smooth",marginBottom:"10px"}}>
                        <SingleTeamList nama={nama} class={class_advisor}/>
                        <SingleTeamList nama={nama} class={class_advisor}/>
                        <SingleTeamList nama={nama} class={class_advisor}/>
                        <SingleTeamList nama={nama} class={class_advisor}/>
                        <SingleTeamList nama={nama} class={class_advisor}/>
                        <SingleTeamList nama={nama} class={class_advisor}/>
                        <SingleTeamList nama={nama} class={class_advisor}/>
                    </div>
                </div>
            </div>
        </>
    )
}