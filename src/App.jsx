import { HashRouter, Route, Routes } from 'react-router-dom'
import About from './components/Pages/About'
import Contact from './components/Pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Pages/Home'
import Course from './components/Pages/Course'
import AffilicationAwards from './components/Pages/AffilicationAwards'
import Testimonial from './components/Pages/Testimonial'
import Placement from './components/Pages/Placement'
import PartnerRunner from './components/PartnerRunner'
import DirectorContent from './components/DirectorContent'
import Slug from './components/Pages/Slug'
import { ReactGoogleReviews } from "react-google-reviews";
import { Box } from '@mui/material'
import {GoogleReviewToken} from "/public/Course"
import "react-google-reviews/dist/index.css";
import Error404 from './components/Pages/Error404'


function App() {

  return (
    <>
      <HashRouter>

        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />
          <Route path='/course/:categoryId/:courseId' element={<Slug />} />
          <Route path='/affilication' element={<AffilicationAwards />} />
          <Route path='/testimonial' element={<Testimonial />} />
          <Route path='/placement' element={<Placement />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/*' element={<Error404/>} />

        </Routes>
        <Box component={"center"} >
          <ReactGoogleReviews layout={"carousel"} featurableId={GoogleReviewToken} />
        </Box>
        <DirectorContent />
        <PartnerRunner />
        <Footer />

      </HashRouter>


    </>
  )
}
export default App
