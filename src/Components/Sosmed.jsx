export default function Sosmed() {
    return (
        <>
        <div className="sidebar-item social-sidebar" style={{marginBottom:"50px"}}>
            <div className="title">
                <h4 style={{fontSize:"16px"}}>SOSIAL MEDIA</h4>
            </div>
            <div className="sidebar-info">
                <ul>
                    <li className="facebook">
                        <a href="#" style={{borderRadius:"50%",fontSize:"20px"}}>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="tiktok">
                        <a href="#" style={{fontSize:"20px",backgroundColor:"gray",borderRadius:"50%"}} >
                            <img src="/assets/tiktok.svg" style={{fontSize:"13px", width:"14px", color:"white"}} alt="" />
                        </a>
                    </li>
                    <li className="pinterest">
                        <a href="#" style={{borderRadius:"50%",fontSize:"20px"}}>
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}