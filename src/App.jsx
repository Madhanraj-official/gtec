import { MemoryRouter, Route,Routes } from 'react-router-dom'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Pages/Home'
import Course from './components/Pages/Course'
import AffilicationAwards from './components/Pages/AffilicationAwards'
import Testimonial from './components/Pages/Testimonial'
import Placement from './components/Pages/Placement'


function App() {


  return (
    <>
<MemoryRouter>

<Header/>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/about' element={<About />} />
<Route path='/course' element={<Course/>} />
<Route path='/affilication-awards' element={<AffilicationAwards/>} />
<Route path='/testimonial' element={<Testimonial/>} />
<Route path='/placement' element={<Placement/>} />
<Route path='/contact' element={<Contact/>} />

</Routes>

<Footer/>
</MemoryRouter>

{/* <Footer/> */}

    </>
  )
}

export default App
