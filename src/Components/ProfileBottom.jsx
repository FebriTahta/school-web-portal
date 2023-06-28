import {useEffect,useState} from "react"

export default function ProfileBottom(params) {

    const [dataProfile, setProfile] = useState([]);
    const ApiProfile = "http://127.0.0.1:8000/api/display-profile";
    const profile_image = "http://127.0.0.1:8000/profile_image/";

    const daftarProfile = async () => {
        try {
            const data = await fetch(ApiProfile);
            const response = await data.json();
            setProfile(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    useEffect(()=>{
        daftarProfile();
    },[]);

    return (
        <>
            <div className="video-area padding-xl text-center bg-fixed text-light shadow dark-hard" style={{backgroundImage:"url(https://i.ytimg.com/vi/VUM2FexoRsM/maxresdefault.jpg)"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="video-heading">
                                <div className="content">
                                    <h2>Profile</h2>
                                    <p>
                                        {(dataProfile ? dataProfile.profile_desc : null)}
                                    </p>
                                </div>
                                <a className="popup-youtube relative video-play-button" href="https://www.youtube.com/watch?v=8GQTt50izkg">
                                    <i className="fa fa-play"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}