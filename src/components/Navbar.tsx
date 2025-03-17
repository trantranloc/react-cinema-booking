import { useState } from "react";
import { ChevronDown, Settings, LogOut, User } from "lucide-react";

const Navbar: React.FC = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

    return (
        <div className="w-full bg-gray-800 p-4 shadow-md flex justify-between items-center transition-all duration-300">
            {/* Tiêu đề Dashboard */}
            <h2 className="text-lg font-semibold text-white">🎬 Admin Dashboard</h2>

            {/* Avatar + Tên Admin */}
            <div className="relative">
                <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600 transition-all"
                >
                    <User size={20} className="text-white" />
                    <span className="text-white">Admin</span>
                    <ChevronDown size={20} className="text-white" />
                </button>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-700 text-white shadow-lg rounded-lg overflow-hidden">
                        <button className="flex items-center w-full px-4 py-2 hover:bg-gray-600 transition-all">
                            <Settings size={18} className="mr-2" />
                            Cài đặt
                        </button>
                        <button className="flex items-center w-full px-4 py-2 hover:bg-gray-600 transition-all">
                            <LogOut size={18} className="mr-2" />
                            Đăng xuất
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
