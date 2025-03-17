import { useState } from "react";
import { Edit, Trash, PlusCircle } from "lucide-react";

interface Showtime {
    id: number;
    movie: string;
    cinema: string;
    room: string;
    showtime: string;
    price: number;
}

const Showtimes: React.FC = () => {
    const [showtimes, setShowtimes] = useState<Showtime[]>([
        { id: 1, movie: "Avengers: Endgame", cinema: "CGV Vincom", room: "Room 1", showtime: "2024-03-20 18:30", price: 100000 },
        { id: 2, movie: "The Batman", cinema: "Lotte Cinema", room: "Room 2", showtime: "2024-03-21 20:00", price: 120000 },
    ]);

    const [newShowtime, setNewShowtime] = useState<Showtime>({
        id: 0,
        movie: "",
        cinema: "",
        room: "",
        showtime: "",
        price: 0,
    });

    // Xử lý thêm suất chiếu
    const handleAddShowtime = () => {
        if (newShowtime.movie && newShowtime.cinema && newShowtime.room && newShowtime.showtime && newShowtime.price > 0) {
            setShowtimes([...showtimes, { ...newShowtime, id: showtimes.length + 1 }]);
            setNewShowtime({ id: 0, movie: "", cinema: "", room: "", showtime: "", price: 0 });
        }
    };

    // Xử lý xóa suất chiếu
    const handleDeleteShowtime = (id: number) => {
        setShowtimes(showtimes.filter((showtime) => showtime.id !== id));
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">🎥 Quản lý suất chiếu</h1>

            {/* Form thêm suất chiếu */}
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <h2 className="text-xl text-white font-semibold mb-4">Thêm suất chiếu mới</h2>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Tên phim"
                        className="p-2 w-1/5 rounded-lg bg-gray-700 text-white border border-gray-600"
                        value={newShowtime.movie}
                        onChange={(e) => setNewShowtime({ ...newShowtime, movie: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Rạp chiếu"
                        className="p-2 w-1/5 rounded-lg bg-gray-700 text-white border border-gray-600"
                        value={newShowtime.cinema}
                        onChange={(e) => setNewShowtime({ ...newShowtime, cinema: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Phòng chiếu"
                        className="p-2 w-1/5 rounded-lg bg-gray-700 text-white border border-gray-600"
                        value={newShowtime.room}
                        onChange={(e) => setNewShowtime({ ...newShowtime, room: e.target.value })}
                    />
                    <input
                        title="datetime"
                        type="datetime-local"
                        className="p-2 w-1/5 rounded-lg bg-gray-700 text-white border border-gray-600"
                        value={newShowtime.showtime}
                        onChange={(e) => setNewShowtime({ ...newShowtime, showtime: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Giá vé"
                        className="p-2 w-1/5 rounded-lg bg-gray-700 text-white border border-gray-600"
                        value={newShowtime.price}
                        onChange={(e) => setNewShowtime({ ...newShowtime, price: Number(e.target.value) })}
                    />
                    <button
                        onClick={handleAddShowtime}
                        className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 flex items-center"
                    >
                        <PlusCircle size={20} className="mr-2" />
                        Thêm
                    </button>
                </div>
            </div>

            {/* Danh sách suất chiếu */}
            <table className="w-full bg-gray-800 text-white rounded-lg overflow-hidden">
                <thead className="bg-gray-700">
                    <tr>
                        <th className="py-3 px-6 text-left">Phim</th>
                        <th className="py-3 px-6 text-left">Rạp</th>
                        <th className="py-3 px-6 text-left">Phòng</th>
                        <th className="py-3 px-6 text-left">Suất chiếu</th>
                        <th className="py-3 px-6 text-left">Giá vé</th>
                        <th className="py-3 px-6 text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {showtimes.map((showtime) => (
                        <tr key={showtime.id} className="border-b border-gray-700">
                            <td className="py-3 px-6">{showtime.movie}</td>
                            <td className="py-3 px-6">{showtime.cinema}</td>
                            <td className="py-3 px-6">{showtime.room}</td>
                            <td className="py-3 px-6">{showtime.showtime}</td>
                            <td className="py-3 px-6">{showtime.price.toLocaleString()} VND</td>
                            <td className="py-3 px-6 text-center flex justify-center space-x-4">
                                <button className="text-yellow-400 hover:text-yellow-300">
                                    <Edit size={20} />
                                </button>
                                <button
                                    onClick={() => handleDeleteShowtime(showtime.id)}
                                    className="text-red-500 hover:text-red-400"
                                >
                                    <Trash size={20} />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Showtimes;
