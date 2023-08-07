
import {useEffect,useState} from "react"
import { NavLink, useNavigate } from "react-router-dom";

export default function KategoriBeritaPopuler(params) {
    const [dataBeritaPopuler, setdataBeritaPopuler] = useState([]);
    const [dataKategori, setKategori] = useState([]);
    const ApiBeritaPopuler = "https://admin.smkskrian1.com/api/berita-populer";
    const ApiKategori = "https://admin.smkskrian1.com/api/daftar-kategori";
    const berita_image = "https://admin.smkskrian1.com/news_image/";
    const navigate = useNavigate(); 

    const fetchBeritaBerdasarkanKategori = async (kategori_slug) => {
        const response = await fetch(`https://admin.smkskrian1.com/api/daftar-berita-berdasarkan-kategori/${kategori_slug}`);
        const data = await response.json();
        return data.data;
    }
    

    const onPageBeritaBerdasarkanKategori = async (changepage) => {
        const daftarBeritaBerdasarkanKategori = await fetchBeritaBerdasarkanKategori(changepage);
        setdataBerita(daftarBeritaBerdasarkanKategori);
    }

    const daftarBeritaPopuler = async () => {
        try {
            const data = await fetch(ApiBeritaPopuler);
            const response = await data.json();
            setdataBeritaPopuler(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    const daftarKategori = async () => {
        try {
            const data = await fetch(ApiKategori);
            const response = await data.json();
            setKategori(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    const handleGoToDetailNews = (news_slug) => {
        navigate(`/baca-berita/${news_slug}`);
    }

    useEffect(()=>{
        daftarBeritaPopuler();
        daftarKategori();
    },[]);

    return (
        <>
            <div className="sidebar-item search">
                <div className="sidebar-info">
                    <form>
                        <input type="text" name="text" className="form-control" />
                        <button type="submit"><i className="fas fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="sidebar-item recent-post">
                <div className="title">
                    <h4>Berita Populer</h4>
                </div>
                <ul>
                    {(dataBeritaPopuler ? dataBeritaPopuler.map((a,i)=>{
                        return <li key={i}>
                        <div className="thumb">
                            <img src={berita_image+a.news_image} style={{objectFit:"cover", height:"110px",borderTopLeftRadius:"10px",borderBottomLeftRadius:"10px"}} alt="Thumb" />
                        </div>
                        <div className="info">
                            <a href="#" onClick={() => handleGoToDetailNews(a.news_slug)}>{a.news_title.substring(0,80)}...</a>
                            <div className="meta-title">
                                <span className="post-date"><i className="fas fa-clock"></i> 
                                {new Date(a.created_at).getDate()} {new Date(a.created_at).toLocaleString('default', { month: 'short' })}, 
                                {new Date(a.created_at).getFullYear()}</span>
                            </div>
                        </div>
                    </li>
                    }):null)}
                </ul>
            </div>
            <div className="sidebar-item category">
                <div className="title">
                    <h4>category list</h4>
                </div>
                <div className="sidebar-info">
                    <ul>
                        {(dataKategori ? dataKategori.map((a,i)=>{
                            return <li key={i}>
                                <a href="#kategori" onClick={() => onPageBeritaBerdasarkanKategori(a.kategori_slug)}
                                >{a.kategori_name} <span>{a.news_count}</span></a>
                            </li>
                        }):null)}
                        <li>
                            <a href="#" onClick={()=>onHandleSemuaKategori()}>Semua Kategori</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}