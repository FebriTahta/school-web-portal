import {useEffect,useState} from "react"

export default function ProfileBottom(params) {

    const [dataProfile, setProfile] = useState([]);
    const ApiProfile = "https://admin.smkskrian1.com/api/display-profile";
    const profile_image = "https://admin.smkskrian1.com/profile_image/";

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
                                <a className="popup-youtube relative video-play-button" href={(dataProfile ? dataProfile.profile_video :null)}>
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