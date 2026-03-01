import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './Components/ScrollToTop/ScrollToTop'
import Header from './Components/Header/Header'
import Hero from './Pages/Hero/Hero'
import Founders from './Pages/Founders/Founders'
import Spotlight from './Pages/Spotlight/Spotlight'
import Achievements from './Pages/Achievements/Achievements'
import Contact from './Pages/Contact/Contact'
import AboutUs from './Pages/AboutUs/AboutUs';
import Esports from './Pages/Esports/Esports';
import Creators from './Pages/Creators/Creators';


import TermsConditions from './Pages/Policies/TermsConditions/TermsConditions'
import PrivacyPolicy from './Pages/Policies/PrivacyPolicy/PrivacyPolicy'
import ShippingPolicy from './Pages/Policies/ShippingPolicy/ShippingPolicy'
import RefundPolicy from './Pages/Policies/RefundPolicy/RefundPolicy'
import Shop from './Pages/Shop/Shop';

function HomePage() {
  return (
    <>
      <Hero />
      <Founders />
      <Spotlight />
      <Contact />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/esports" element={<Esports />} />
        <Route path="/creators" element={<Creators />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
