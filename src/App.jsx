import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Blog from './pages/blog';
import ContactPage from './pages/contact-page-';
import CorporateTraining from './pages/corporate-training-';
import Gallery from './pages/gallery-';
import ImageManagement from './pages/image-management';
import IndividualCoaching from './pages/individual-coaching';
import InstitutionalTraining from './pages/institutional-training-';
import OurServices from './pages/our-services';
import CorporateCommunicationBlog from './pages/blog/corporate-communication';
import ExecutivePresenceBlog from './pages/blog/executive-presence';
import PersonalBrandBlog from './pages/blog/personal-brand';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/corporate-communication" element={<CorporateCommunicationBlog />} />
                <Route path="/blog/executive-presence" element={<ExecutivePresenceBlog />} />
                <Route path="/blog/personal-brand" element={<PersonalBrandBlog />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/corporate-training" element={<CorporateTraining />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/image-management" element={<ImageManagement />} />
                <Route path="/individual-coaching" element={<IndividualCoaching />} />
                <Route path="/institutional-training" element={<InstitutionalTraining />} />
                <Route path="/our-services" element={<OurServices />} />
            </Routes>
        </Router>
    );
}

export default App;
