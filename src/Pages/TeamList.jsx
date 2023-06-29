import HeaderLayout from '../Layouts/HeaderLayout';
import FooterLayout from '../Layouts/FooterLayout';
import TopInfo from '../Components/TopInfo';
import HeroHeading from '../Components/HeroHeading';
import SingleTeamList from '../Components/SingleTeamList';
import {useEffect,useState} from "react"

export default function TeamList() {
    const [dataGuru, setGuru] = useState([]);
    const ApiGuru = "https://admin.smkskrian1.com/api/daftar-guru";
    const guru_image = "https://admin.smkskrian1.com/image_guru/";

    const daftarGuru = async () => {
        try {
            const data = await fetch(ApiGuru);
            const response = await data.json();
            setGuru(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    useEffect(()=>{
        daftarGuru();
    },[]);

    return(
        <>
        <div style={{width:"100%"}}>
            <TopInfo/>
            <HeaderLayout/>
            <HeroHeading judul={"Daftar Guru"}/>
            <div className="advisor-area default-padding bottom-less" style={{width:"100%"}}>
                <div className="container">
                    <div className="advisor-items text-center">
                        <div className="row">
                            {(dataGuru ? dataGuru.map((a,i)=>{
                                return <SingleTeamList key={i} guru_wa={a.guru_wa} guru_name={a.guru_name} 
                                guru_image={guru_image+a.guru_image} guru_jabatan={a.guru_jabatan}/>
                            }):null)}
                        </div>
                    </div>
                </div>
            </div>
            <FooterLayout/>
        </div>
        </>
    )
}