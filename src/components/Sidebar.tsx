import { Link } from "react-router-dom";
import { Home, Film, Calendar, Users, Menu } from "lucide-react";

interface SidebarProps {
    isOpen: boolean;
    toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
    return (
        <div
            className={`fixed top-0 left-0 h-full bg-gray-800 text-white p-4 transition-all duration-300 ${isOpen ? "w-64" : "w-16"
                }`}
        >
            {/* Nút mở/đóng Sidebar */}
            <button onClick={toggleSidebar} className="text-white mb-4">
                <Menu size={24} />
            </button>

            <ul>
                <li className="mb-4">
                    <Link to="/admin" className="flex items-center space-x-2 hover:text-gray-400">
                        <Home />
                        {isOpen && <span>Dashboard</span>}
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/admin/movies" className="flex items-center space-x-2 hover:text-gray-400">
                        <Film />
                        {isOpen && <span>Quản lý Phim</span>}
                    </Link>
                </li>
                <li className="mb-4">
                    <Link to="/admin/showtimes" className="flex items-center space-x-2 hover:text-gray-400">
                        <Calendar />
                        {isOpen && <span>Suất Chiếu</span>}
                    </Link>
                </li>
                <li>
                    <Link to="/admin/users" className="flex items-center space-x-2 hover:text-gray-400">
                        <Users />
                        {isOpen && <span>Người dùng</span>}
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
