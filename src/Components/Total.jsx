import {useEffect,useState} from "react"

export default function Total(params) {

    const [dataTotal, setTotal] = useState([]);
    const ApiTotal = "https://admin.smkskrian1.com/api/total-siswa";

    const daftarTotal = async () => {
        try {
            const data = await fetch(ApiTotal);
            const response = await data.json();
            setTotal(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    useEffect(()=>{
        daftarTotal();
        
    },[]);

    return(
        <>
            <div className="fun-factor-area overflow-hidden bg-gradient text-light default-padding">
                <div className="container">
                    <div className="fun-fact-items text-center">
                        {/* Fixed BG */}
                        <div className="fixed-bg contain" style={{backgroundImage:"url(/assets/img/map.svg)"}}></div>
                        {/* Fixed BG */}
                        <div className="row">
                            <div className="col-lg-3 col-md-6 item">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={(dataTotal[0]? dataTotal[0].total_anak :null)} data-speed="5000">
                                        {dataTotal[0]? new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
                                            dataTotal[0].total_anak,
                                        ):null}
                                        </div>
                                        <div className="operator">.</div>
                                    </div>
                                    <span className="medium">Total Siswa Aktif</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={(dataTotal[0] ? dataTotal[0].total_kelas :null)} data-speed="5000">
                                        {dataTotal[0]?new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
                                            dataTotal[0].total_kelas,
                                        ) :null}
                                        </div>
                                        <div className="operator">.</div>
                                    </div>
                                    <span className="medium">Total Kelas</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to={dataTotal[0]? dataTotal[0].total_jurusan :null} data-speed="5000">
                                        {dataTotal[0]? new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(
                                            dataTotal[0].total_jurusan,
                                        ):null}
                                        </div>
                                        <div className="operator">+</div>
                                    </div>
                                    <span className="medium">Total Jurusan</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to="90" data-speed="5000">90</div>
                                        <div className="operator">%</div>
                                    </div>
                                    <span className="medium">Successful students</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}