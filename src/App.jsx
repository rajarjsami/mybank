import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import HeroSection from "./components/sections/HeroSection";
import CustomersPaySection from "./components/sections/CustomersPaySection";
import InfoSection from "./components/sections/InfoSection";
import Services from "./components/sections/Services";
import SubscribeSection from "./components/sections/SubscribeSection";
import Footer from "./components/Footer";
import Abouts from './pages/Abouts';
import Contacts from './pages/Contacts';
import FAQPage from './pages/FAQPage';
import ServicesPage from './pages/ServicesPage';
import BlogPage from './pages/BlogPage';
import LoginModal from './components/modals/LoginModal';
import RegisterModal from './components/modals/RegisterModal';

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="main w-full h-auto">
      <Header
        onLoginClick={() => setShowLogin(true)}
        onRegisterClick={() => setShowRegister(true)}
      />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <CustomersPaySection />
              <InfoSection />
              <Services />
              <SubscribeSection />
            </>
          }
        />
        <Route path="/abouts" element={<Abouts />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      <Footer />

      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
      {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    </div>
  );
}

export default App;
