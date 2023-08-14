
import {useEffect,useState} from "react"
import { useNavigate, NavLink } from "react-router-dom"
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

export default function FloatMenu() {

    const [sosmed, setSosmed] = useState([]);
    const [menu, setMenu] = useState([]);
    const apiFloatMeny = "https://admin.smkskrian1.com/api/display-floatmenu";
    const [show, setShow] = useState(false);
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [brosur, setBrosur] = useState([]);
    const ApiBrosur = "https://admin.smkskrian1.com/api/display-brosur";
    const brosur_image  = "https://admin.smkskrian1.com/brosur_image/";

    const daftarBrosur = async () => {
        setIsLoading(true);
        try {
            const data = await fetch(ApiBrosur);
            const response = await data.json();
            setBrosur(response.data);
        }   catch (err) { 
            console.log(err);
        }
        setIsLoading(false);
    }

    const shoot = () => {
        $(".float-toggle").toggleClass('open');
        $(".float-round").toggleClass('open');
        $(".float-line").toggleClass('open');
    }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();

    const daftarSosmed = async () => {
        try {
            const data = await fetch(apiFloatMeny);
            const response = await data.json();
            setSosmed(response.datasosmed);

        }   catch (err) { 
            console.log(err);
        }
    }

    const daftarMenu = async () => {
        try {
            const data = await fetch(apiFloatMeny);
            const response = await data.json();
            setMenu(response.datamenu);

        }   catch (err) { 
            console.log(err);
        }
    }

    useEffect(()=>{
        daftarMenu();
        daftarSosmed();
        daftarBrosur();
    },[]);

    useEffect(()=>{

        const timeout = setTimeout(() => {
            setCount(count + 1)
        }, 1000);

        if (count > 5) {
            handleShow()
        }

        if (count > 15) {
            handleClose()
            clearTimeout(timeout)
        }

    },[count])
    
    return(
        <>
            <div className="containers" style={{zIndex:"999"}}>
                <a href="#z" onClick={shoot}>
                    <div className="float-toggle">
                        <span className="fa fa-plus"></span>
                    </div>
                </a>                
                
                <div className="float-round" >
                    {(sosmed ? sosmed.map((a,i)=>{
                        return <a href={a.sosmed_link} target="_blank" className="btn-app" key={i}>
                            <div className={a.sosmed_icon} style={{marginTop:"10px"}}></div>
                        </a>
                    }):null)}
                </div>
                
                <div className="float-line" >
                    <div className="btn-app" style={{background:"transparent", boxShadow:"none"}}></div>
                    <div className="btn-app" >
                        <NavLink to={'/'} style={{cursor:"pointer"}}>
                            <i className="fa fa-home text-white"></i>
                        </NavLink>
                    </div>
                    <div className="btn-app" >
                        <a style={{cursor:"pointer"}} onClick={handleShow} klik={'handleShow'}>
                            <i className="fa fa-book"></i>
                        </a>
                    </div>
                    {(menu ? menu.map((a,i)=>{
                        return <div className="btn-app" key={i}>
                            <NavLink to={a.floatmenus_link} style={{cursor:"pointer", color:"white"}} >
                                <i className={a.floatmenus_icon} style={{marginTop:"10px"}}></i>
                            </NavLink>
                        </div>
                    }) :null)}
                </div>
            </div>


            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                {/* <Modal.Header closeButton>           
                </Modal.Header> */}
                <Modal.Body style={{padding:0}}>
                <div className="promo-brosur" style={{color:"white"}}>
                    <div className="row align-center promo-brosur__inner">
                    {isLoading ? (<Skeleton count={4}/>) : (brosur ? brosur.map((a,i)=> {
                        if (i == 1) {
                            return <div key={i} className="col-lg-12 promo-brosur__inner__one" style={{color:"white"}}>
                                <img src={brosur_image+a.brosur_image} style={{width:"100%"}} alt="" />
                            </div>
                        }else{
                            return <div key={i} className="col-lg-12 promo-brosur__inner__two" style={{color:"white"}}>
                                <img src={brosur_image+a.brosur_image} style={{width:"100%"}} alt="" />
                            </div>
                        }
                    }):null) }
                    </div>
                </div>
                    
                </Modal.Body>
                <Modal.Footer>
                    {(count < 15 ? <Button variant="danger" style={{float:"right"}} onClick={handleClose}>
                        ({count} / 15)
                    </Button> : null)}
                    <Button variant="secondary" style={{float:"right"}} onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}