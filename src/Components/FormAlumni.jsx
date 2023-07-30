import React, {useEffect,useState} from "react"
import axios from "axios"
export default function FormAlumni()
{
    const  [inputValue, setInputValue] =  useState('');
    const [dataJurusan, setJurusan] = useState([]);
    const ApiJurusan = "https://admin.smkskrian1.com/api/daftar-jurusan";

    const [alumniImage, setImage] = useState('');
    const [alumniName, setName] = useState('');
    const [alumniPekerjaan, setPekerjaan] = useState('');
    const [alumniAlamat, setAlamat] = useState('');
    const [alumniMasuk, setMasuk] = useState('');
    const [alumniKeluar, setKeluar] = useState('');
    const [alumniJurusanId, setJurusanId] = useState('');
    const [alumniTelp, setTelp] = useState('');
 
    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(20),(val, index) => year - index);

    const daftarJurusan = async () => {
        try {
            const data = await fetch(ApiJurusan);
            const response = await data.json();
            setJurusan(response.data);

        }   catch (err) { 
            console.log(err);
        }
    }

    const uploadAlumni = async()=>{
        const formData = new FormData();
        formData.append('alumni_name', alumniName);
        formData.append('jurusan_id', alumniJurusanId);
        formData.append('alumni_pekerjaan', alumniPekerjaan);
        formData.append('alumni_alamatpekerjaan', alumniAlamat);
        formData.append('alumni_tahunmasuk', alumniMasuk);
        formData.append('alumni_tahunkeluar', alumniKeluar);
        formData.append('alumni_telp', alumniTelp);
        formData.append('alumni_image', alumniImage);

        const responce = await axios.post("https://admin.smkskrian1.com/api/new-alumni", formData,{
            headers:{'Content-Type': "multipart/form-data"},
        });

        if (responce) {
            console.log(responce)
        }
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();
        await uploadAlumni();
    }
    
    useEffect(()=>{
        daftarJurusan();
    },[]);
    
    return  (
    <React.Fragment>
        <form id="form_edit" onSubmit={handleSubmit}>
            <div className="card-body px-0 pb-2">
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="banner_banner">FOTO ALUMNI</label>
                            <input type="file" style={{border:"none"}} name="alumni_image" onChange={(e)=>setImage(e.target.files[0])} className="form-control" accept="image/*" id="inputGroupFile01" required />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="judul_banner">NAMA ALUMNI</label>
                            <input type="text" className="form-control" name="alumni_name" onChange={(e)=>setName(e.target.value)} placeholder="......." required />
                        </div>  
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="judul_banner">ALUMNI TELP / WA</label>
                            <input type="number" className="form-control" name="alumni_telp" onChange={(e)=>setTelp(e.target.value)} placeholder="......" required />
                        </div>  
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="judul_banner">ASAL JURUSAN</label>
                            <select name="jurusan_id" className="form-control" id="" onChange={(e)=>setJurusanId(e.target.value)}>
                                <option value="">-- PILIH JURUSAN --</option>
                                {(dataJurusan? dataJurusan.map((a,i)=>{
                                    return <option key={i} value={a.id}>{a.jurusan_name}</option>
                                }) :null)}
                            </select>
                        </div>  
                    </div>
                    
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="judul_banner">TAHUN MASUK</label>
                            <select name="alumni_tahunmasuk" className="form-control" onChange={(e)=>setMasuk(e.target.value)} id="">
                            <option value="">-- PILIH TAHUN MASUK --</option>
                            {
                                years.map((year, index) => {
                                    return <option key={`year${index}`} value={year}>{year}</option>
                                })
                            }
                            </select>
                        </div>  
                    </div>
                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="judul_banner">TAHUN LULUS</label>
                            <select name="alumni_tahunkeluar" className="form-control" id="" onChange={(e)=>setKeluar(e.target.value)}>
                            <option value="">-- PILIH TAHUN LULUS --</option>
                            { 
                                years.map((year, index) => {
                                    return <option key={`year${index}`} value={year}>{year}</option>
                                })
                            }
                            </select>
                        </div>  
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="judul_banner">PEKERJAAN ALUMNI</label>
                            <input type="text" className="form-control" name="alumni_pekerjaan" onChange={(e)=>setPekerjaan(e.target.value)} placeholder="......" required />
                        </div>  
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <label htmlFor="wa_banner">ALAMAT LOKASI KERJA ALUMNI</label>
                            <textarea name="alumni_alamatpekerjaan" id="banner_desc" cols="30" rows="5" onChange={(e)=>setAlamat(e.target.value)} className="form-control"></textarea>
                        </div>  
                    </div>
                </div>
                            
                <div className="form-group">
                    <button className="btn circle btn-sm btn-gradient" type="submit" style={{color:"white"}}>Submit</button>
                </div>
            </div>
        </form>
    </React.Fragment>
    )
}