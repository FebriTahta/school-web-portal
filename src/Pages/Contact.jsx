import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import { NavLink, useNavigate } from "react-router-dom";
import {useEffect,useState} from "react"

export default function Contact() {

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

    return(
        <>
            <TopInfo/>
            <HeaderLayout/>
            <HeroHeading judul={'Contact'}/>
            <div className="contact-area default-padding-top">
                <div className="container">
                    <div className="contact-items">
                        <div className="row align-center">
                            <div className="col-lg-4 left-item">
                                <div className="info-items">
                                    {/* Single Item */}
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fas fa-map-marked-alt"></i>
                                        </div>
                                        <div className="info">
                                            <h5>Location</h5>
                                            <p>
                                                {(dataProfile? dataProfile.profile_alamat :null)}
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fas fa-phone"></i>
                                        </div>
                                        <div className="info">
                                            <h5>Make a Call</h5>
                                            <p>
                                                (031) 8971207
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Single Item */}
                                    {/* Single Item */}
                                    <div className="item">
                                        <div className="icon">
                                            <i className="fas fa-envelope-open"></i>
                                        </div>
                                        <div className="info">
                                            <h5>Send a Mail</h5>
                                            <p>
                                                mail@smkkrian1.sch.id
                                            </p>
                                        </div>
                                    </div>
                                    {/* End Single Item */}
                                </div>
                            </div>
                            <div className="col-lg-8 right-item">
                                <h5>Need Help Or More Information?</h5>
                                <h2>Hubungi Kami</h2>
                                <form action="assets/mail/contact.php" method="POST" className="contact-form">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input className="form-control" id="name" name="name" placeholder="Name" type="text"/>
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="email" name="email" placeholder="Email*" type="email"/>
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text"/>
                                                <span className="alert-error"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="form-group comments">
                                                <textarea className="form-control" id="comments" name="comments" placeholder="Tinggalkan Pesan Untuk Kami"></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <button type="submit" name="submit" id="submit">
                                                Send Message <i className="fa fa-paper-plane"></i>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Alert Message */}
                                    <div className="col-lg-12 alert-notification">
                                        <div id="message" className="alert-msg"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="maps-area">
                <div className="google-maps">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15825.616405843488!2d112.5847652!3d-7.4204508!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78084e164c2e91%3A0xda653a49b0cff45c!2sSMK%20Krian%201%20Sidoarjo!5e0!3m2!1sen!2suk!4v1687937033654!5m2!1sen!2suk" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d14767.262289338461!2d70.79414485000001!3d22.284975!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1424308883981"></iframe> */}
                </div>
            </div>
            <FooterLayout/>
        </>
    )
}