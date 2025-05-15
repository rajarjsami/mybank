import { useState } from "react";
import strings from "./Strings/Strings";
import { Link } from "react-router-dom";

function Header({ onLoginClick, onRegisterClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
return (
    <div className="header w-full h-16 flex justify-between items-center px-4 bg-white shadow-md relative">
      
      {/* Logo */}
      <Link to="/">
      <div className="logo cursor-pointer">
        <h2 className="text-xl font-serif font-semibold text-white">{strings.MyBank}</h2>
      </div></Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-4 font-bold font-serif text-[17px] text-white">
        <Link to="/">Home</Link>
       <Link to="/abouts">{strings.About}</Link>
       <Link to="/contacts">{strings.contacts}</Link>
       <Link to="/faq">{strings.FAQs}</Link>
       <Link to="/services">{strings.Services}</Link>
       <Link to="/blog">{strings.Blog}</Link>
      </div>

      {/* Actions */}
      <div className="hidden md:flex items-center space-x-4">
        <span onClick={onLoginClick} className="font-bold text-white cursor-pointer">{strings.Login}</span>
        <button onClick={onRegisterClick} className="bg-black text-white rounded-md w-28 py-2 font-bold">
          Get Started
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden flex flex-col items-center space-y-4 py-4">
       
            <Link to="/">Home</Link>
       <Link to="/abouts">{strings.About}</Link>
       <Link to="/contacts">{strings.contacts}</Link>
       <Link to="/faq">{strings.FAQs}</Link>
       <Link to="/services">{strings.Services}</Link>
       <Link to="/blog">{strings.Blog}</Link>
          <span onClick={onLoginClick}  className="font-bold cursor-pointer">{strings.Login}</span>
          <button onClick={onRegisterClick} className="bg-black text-white rounded-md w-32 py-2 font-bold">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
}

export default Header
