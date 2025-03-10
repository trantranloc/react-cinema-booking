import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faTicketAlt} className="text-yellow-400 text-xl" />
          <span className="text-lg font-semibold">Cinema Booking</span>
        </div>

        {/* Điều hướng */}
        <nav className="mt-4 md:mt-0">
          <ul className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
            <li><Link to="/" className="hover:text-yellow-400">Trang chủ</Link></li>
            <li><Link to="/movies" className="hover:text-yellow-400">Phim</Link></li>
            <li><Link to="/booking" className="hover:text-yellow-400">Đặt vé</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400">Liên hệ</Link></li>
          </ul>
        </nav>

        {/* Liên hệ */}
        <div className="mt-4 md:mt-0 flex flex-col space-y-2 text-sm text-gray-400">
          <p>
            <FontAwesomeIcon icon={faPhone} className="mr-2 text-yellow-400" />
            1900 1009
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-yellow-400" />
            support@cinema.com
          </p>
        </div>

      </div>
      {/* Copyright */}
      <div className="text-center text-sm text-gray-400 mt-4">
        © 2025 Cinema Booking. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
