import React from "react";

function Footer() {
  return (
    <div className="footerbottomNav">
      <div className="w-full bg-black text-white px-4 py-8 flex flex-wrap md:flex-nowrap justify-between">
        {/* Logo */}
        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <span className="text-[25px] font-bold font-serif block">MyBank</span>
        </div>

        {/* Bottom Nav Items */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
          <ul>
            <li className="font-bold mb-2">Products</li>
            <li className="hover:underline">
              <a href="#">Careere</a>
            </li>
            <li className="hover:underline">
              <a href="#">About Us</a>
            </li>
            <li className="hover:underline">
              <a href="#">Insights</a>
            </li>
            <li className="hover:underline">
              <a href="#">PCI Compliance</a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4 mb-6 md:mb-0">
          <ul>
            <li className="font-bold mb-2">Service</li>
            <li className="hover:underline">
              <a href="#">Docs</a>
            </li>
            <li className="hover:underline">
              <a href="#">Knowledge Base</a>
            </li>
            <li className="hover:underline">
              <a href="#">System Status</a>
            </li>
            <li className="hover:underline">
              <a href="#">Tutorial</a>
            </li>
          </ul>
        </div>

        <div className="w-full sm:w-1/2 md:w-1/4">
          <ul>
            <li className="font-bold mb-2">FAQ</li>
            <li className="hover:underline">
              <a href="#">About</a>
            </li>
            <li className="hover:underline">
              <a href="#">Leadership</a>
            </li>
            <li className="hover:underline">
              <a href="#">Insights</a>
            </li>
            <li className="hover:underline">
              <a href="#">Press/News</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="w-full bg-black text-white text-center py-3 text-sm">
        <span>&copy; 2025 MyBank Banking All Rights Reserved</span>
      </div>
    </div>
  );
}

export default Footer;
