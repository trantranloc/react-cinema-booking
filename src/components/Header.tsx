import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes, faTicketAlt, faUser, faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md py-4 fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <FontAwesomeIcon icon={faTicketAlt} className="mr-2 text-yellow-400" />
          <span className="hidden sm:inline">Cinema Booking</span>
        </Link>

        {/* Nút Menu Mobile (đẩy sát phải hơn) */}
        <button
          className="md:hidden text-2xl ml-auto transition-transform transform hover:scale-110"
          onClick={() => setIsOpen(!isOpen)}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>

        {/* Menu */}
        <nav className={`absolute md:static top-16 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? "block" : "hidden md:flex"}`}>
          <ul className="md:flex space-y-4 md:space-y-0 md:space-x-8 text-center md:text-left p-4 md:p-0">
            <li><Link to="/" className="hover:text-yellow-400 transition">Trang chủ</Link></li>
            <li><Link to="/movies" className="hover:text-yellow-400 transition">Phim</Link></li>
            <li><Link to="/booking" className="hover:text-yellow-400 transition">Đặt vé</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-400 transition">Liên hệ</Link></li>
          </ul>
        </nav>

        {/* Đăng nhập & Đăng ký */}
        <div className="hidden md:flex gap-4">
          <Link to="/login" className="flex items-center bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition">
            <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
            Đăng nhập
          </Link>
          <Link to="/register" className="flex items-center bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg shadow-md hover:bg-yellow-400 transition">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Đăng ký
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
