export default function Total(params) {
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
                                        <div className="timer" data-to="35" data-speed="5000">35</div>
                                        <div className="operator">M</div>
                                    </div>
                                    <span className="medium">Total Siswa Aktif</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to="128" data-speed="5000">128</div>
                                        <div className="operator">K</div>
                                    </div>
                                    <span className="medium">Total Alumni</span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item">
                                <div className="fun-fact">
                                    <div className="counter">
                                        <div className="timer" data-to="12" data-speed="5000">12</div>
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