import {useEffect,useState} from "react"

const FooterLayout = () => {

    const [dataJurusan, setJurusan] = useState([]);
    const ApiJurusan = "https://admin.smkskrian1.com/api/preview-jurusan";

    const daftarJurusan = async () => {
        try {
            const data = await fetch(ApiJurusan);
            const response = await data.json();
            setJurusan(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    useEffect(()=>{
        daftarJurusan();
    },[]);

    return (
       <div style={{width:"100%"}}>
            <footer className="bg-dark text-light">
            
            <div className="container">
                <div className="f-items default-padding">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 item">
                            <div className="f-item about">
                                <img src="/assets/logo-putih.png" style={{width:"150px"}} alt="Logo" />
                                <p>
                                    Sekolah Menengah Kejuruan (SMK) yang mempunyai beberapa jurusan bergengsi dengan para pendidik yang Profesional di Bidangnya
                                </p>
                                {/* <div className="subscribe">
                                    <form action="#">
                                        <input type="email" placeholder="Enter your e-mail here" className="form-control" name="email" />
                                        <button type="submit"><i className="fa fa-paper-plane"></i></button>  
                                    </form>
                                </div> */}
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 item">
                            <div className="f-item link">
                                <h4 className="widget-title">Main Menu</h4>
                                <ul>
                                    <li>
                                        <a href="#">PPDB</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-2 col-md-6 item">
                            <div className="f-item link">
                                <h4 className="widget-title">Jurusan</h4>
                                <ul>
                                    {(dataJurusan ? dataJurusan.map((a,i)=>{
                                        return <li key={i}>
                                            <a href="#">{a.jurusan_name}</a>
                                        </li>
                                    }) :null)}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 item">
                            <div className="f-item contact">
                                <h4 className="widget-title">Contact Info</h4>
                                <div className="opening-info">
                                    <h5>Opening Hours</h5>
                                    <ul>
                                        <li> <span> Senin - Jumat :  </span>
                                        <div className="float-right"> 07.00 am - 16.00 pm </div>
                                        </li>
                                        <li> <span> Sabtu :</span>
                                        <div className="float-right"> 07.00 am - 12.00 pm </div>
                                        </li>
                                        <li> <span> Minggu : </span>
                                        <div className="float-right closed"> Closed </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <p>&copy; All Rights Reserved by <a href="#">DigdayaIT</a></p>
                        </div>
                        <div className="col-lg-6 text-right link">
                            <ul>
                                <li>
                                    <a href="#">Website</a>
                                </li>
                                <li>
                                    <a href="#">Contact Dev</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
       </div>  
    );
}

export default FooterLayout;