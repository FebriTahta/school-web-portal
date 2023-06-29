import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import NewsList from './Pages/NewsList'
import TeamList from './Pages/TeamList'
import Home from './Pages/Home'
import ScrollToTop from './Components/ScroltoTo'
import AboutUs from './Pages/AboutUs'
import DetailNews from './Pages/DetailNews'
import NewsListFromKategori from './Pages/NewsListFromKategori'
import Jurusan from './Pages/Jurusan'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/daftar-guru' element={<TeamList/>}></Route>
          <Route path='/daftar-jurusan' element={<Jurusan/>}></Route>
          <Route path='/tentang-kami' element={<AboutUs/>}></Route>
          <Route path='/daftar-berita' element={<NewsList/>}></Route>
          <Route path='/baca-berita/:slug' element={<DetailNews/>}></Route>
          <Route path='/daftar-berita-berdasarkan-kategori/:slug' element={<NewsListFromKategori/>} ></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
