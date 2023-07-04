
import '../App.css'
import React, { useRef, useLayoutEffect } from 'react'
import { useNavigate, NavLink } from "react-router-dom"


const HeaderLayout = () => {
    
    const navigate = useNavigate()
    const stickyHeader = useRef()
    const url = window.location.pathname.substring(1);

    useLayoutEffect(() => {
      const mainHeader = document.getElementById('navbar')
      let fixedTop = stickyHeader.current.offsetTop
      const fixedHeader = () => {
        if (window.pageYOffset > fixedTop) {
          mainHeader.classList.add('navbarstick')
        } else {
          mainHeader.classList.remove('navbarstick')
        }
      }
      window.addEventListener('scroll', fixedHeader)
    }, [])

    return(
        <>
            <header id="home" >
            {/* Start Navigation */}
            <nav style={{width:"100%"}} className="navbar navbar-default attr-border dark bootsnav" id='navbar' ref={stickyHeader}>

                <div className="container-full">

                    {/* Start Atribute Navigation */}
                    <div className="attr-nav">
                        <form action="#">
                            <input type="text" placeholder="Search" className="form-control" name="text" />
                            <button type="submit">
                                <i className="fa fa-search"></i>
                            </button>  
                        </form>
                    </div>        
                    {/* End Atribute Navigation */}

                    {/* Start Header Navigation */}
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu">
                            <i className="fa fa-bars"></i>
                        </button>
                        <NavLink to={'/'} lassName="navbar-brand" href="#">
                            <img src="/assets/logo-text.png" className="logo" style={{maxWidth:"180px"}} alt="Logo" />
                        </NavLink>
                    </div>
                    {/* End Header Navigation */}

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="navbar-menu">
                        <ul className="nav navbar-nav navbar-right" data-in="fadeInDown" data-out="fadeOutUp">
                            <li>
                                {/* <a href="#" onClick={()=>navigate('/')} className="active">Home</a> */}
                                <NavLink to='/' className={({isActive})=>{
                                    return (
                                        (!isActive ? '' : 'active')
                                    )
                                }}>Home</NavLink>
                            </li>
                            <li className="dropdown">
                                <NavLink href="#" className={(()=>{
                                    if (url == 'daftar-guru' || url == 'daftar-berita' || url == 'tentang-kami' || url == 'daftar-jurusan') {
                                        return 'dropdown-toggle active'
                                    }else{
                                        return 'dropdown-toggle'
                                    }
                                })} data-toggle="dropdown" >Informasi</NavLink>
                                <ul className="dropdown-menu">
                                    {/* <li><a href="#" onClick={()=>navigate('/tentang-kami')}>Tentang SMK 1 Krian</a></li> */}
                                    <li><a href="#" onClick={()=>navigate('/daftar-berita')}>Daftar Berita</a></li>
                                    <li><a href="#" onClick={()=>navigate('/daftar-guru')}>Daftar Guru</a></li>
                                    <li><a href="#" onClick={()=>navigate('/daftar-jurusan')}>Daftar Jurusan</a></li>
                                    <li><a href="#" onClick={()=>navigate('/daftar-prestasi')}>Daftar Prestasi</a></li>
                                    <li><a href="#" onClick={()=>navigate('/daftar-program-unggulan')}>Daftar Program Unggulan</a></li>

                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Kesiswaan</a>
                                <ul className="dropdown-menu">
                                    <li><NavLink href="#" to={'/daftar-kesiswaan'}>Informasi Kesiswaan</NavLink></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Pembayaran</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">Informasi Pembayaran</a></li>
                                    <li><a href="#">Cek Pembayaran</a></li>
                                </ul>
                            </li>
                            {/* <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Mitra</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">--</a></li>
                                </ul>
                            </li> */}
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" >Alumni</a>
                                <ul className="dropdown-menu">
                                    <li><a href="#">--</a></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <NavLink href="#" data-toggle="dropdown"  className={(()=>{
                                    if (url == 'contact' || url == 'contact') {
                                        return 'dropdown-toggle active'
                                    }else{
                                        return 'dropdown-toggle'
                                    }
                                })} >Contact</NavLink>
                                <ul className="dropdown-menu">
                                    <li><a href="#" onClick={()=>navigate('/contact')}>Contact</a></li>
                                    <li><a href="http://smkkrian1.sch.id/" target='_blank'>Old Website</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>{/* /.navbar-collapse */}
                </div>

            </nav>
            {/* End Navigation */}

            </header>
        </>
    )
}

export default HeaderLayout;