import {useEffect,useState} from "react";
import { preLoaderAnim } from "../animation";
import './preloader.css';

export default function Preloader() {

    useEffect(()=>{
        preLoaderAnim();
    },[]);

    return(
        <>
            <div className="preloader">
                <div className="texts-container">
                    <span>SMK 1 </span>
                    <span>KRIAN </span>
                    <span>SIDOARJO </span>
                </div>
            </div>
        </>
    )
}