import './App.css'
import Home from './pages/home'
import Artikel from './pages/Artikel'
import Galeri from './pages/galeri'
import About from './pages/About'
import PageNotFound from './pages/PageNotFound'
import Produk from './pages/produk'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Karir from './pages/karir'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artikel' element={<Artikel />} />
        <Route path='/galeri' element={<Galeri />} />
        <Route path='/about' element={<About />} />
        <Route path='/produk' element={<Produk />} />
        <Route path='/karir' element={<Karir />} />
        <Route path='/*' element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
