import logo from './logo.svg';
import './App.css';
import Navigation from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Overlay from './components/overlay';
import Offer from './components/offer';
import Clients from './components/clients';
import Footer from './components/footer';
import Transform from './components/transform';
import Homepage from './pages/homepage';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AboutPage from './pages/aboutpage';
import ServicePage from './pages/servicepage';
import ContactUsPage from './pages/ContactUsPage';
import ReviewsPage from './pages/reviewspage';
import Appointmentpage from './pages/appointmentpage';

function App() {
  return (
<BrowserRouter>
   <Routes>
      <Route path="/" element={<Navigate to="/mech" />} />
      <Route path="/mech" element={<Homepage />} />
      <Route path='/about-us' element={<AboutPage />} />
      <Route path='/services' element={<ServicePage />} />
      <Route path='/contact-us' element={<ContactUsPage />} />
      <Route path='/reviews' element={<ReviewsPage />} />
      <Route path='/appointment' element={<Appointmentpage />} />
   </Routes>
</BrowserRouter>

    );
}

export default App;
