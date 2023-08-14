
import {useEffect,useState} from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

export default function Brosur(params) {
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

    useEffect(()=>{
        daftarBrosur()
        
    },[])

    return(
        <>
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