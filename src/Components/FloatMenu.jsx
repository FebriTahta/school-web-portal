

export default function FloatMenu() {
    const shoot = () => {
        $(".float-toggle").toggleClass('open');
        $(".float-round").toggleClass('open');
        $(".float-line").toggleClass('open');
        console.log('oke oke');
    }
    
    return(
        <>
            <div className="containers" style={{zIndex:"999"}}>
                <a href="#z" onClick={shoot}>
                    <div className="float-toggle">
                        <span className="fa fa-plus"></span>
                    </div>
                </a>                
                
                <div className="float-round" >
                    <div className="btn-app">
                        <div className="fa fa-twitter"></div>
                    </div>
                    <div className="btn-app">
                        <div className="fa fa-facebook"></div>
                    </div>
                    <div className="btn-app" >
                        <div className="fa fa- fa-wikipedia-w"></div>
                    </div>
                </div>
                
                <div className="float-line" >
                    <div className="btn-app" >
                        <div className="fa fa-map-marker"></div>
                    </div>
                    <div className="btn-app" >
                        <div className="fa fa-envelope"></div>
                    </div>
                    <div className="btn-app" >
                        <div className="fa fa-video-camera"></div>
                    </div>
                    <div className="btn-app" >
                        <div className="fa fa-soundcloud"></div>
                    </div>
                    <div className="btn-app" >
                        <div className="fa fa-graduation-cap"></div>
                    </div>
                    <div className="btn-app" >
                        <div className="fa fa-image"></div>
                    </div>
                    <div className="btn-app" style={{marginBottom:"10px"}}>
                        <div className="fa fa-vine"></div>
                    </div>
                </div>
                
                
            </div>
           
        </>
    )
}