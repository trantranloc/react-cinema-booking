import { useState } from "react";
import { Edit, Trash, PlusCircle } from "lucide-react";

interface Movie {
    id: number;
    title: string;
    genre: string;
    duration: number;
}

const Movies: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([
        { id: 1, title: "Avengers: Endgame", genre: "Action", duration: 181 },
        { id: 2, title: "The Batman", genre: "Crime", duration: 176 },
    ]);

    const [newMovie, setNewMovie] = useState<Movie>({ id: 0, title: "", genre: "", duration: 0 });

    // Xử lý thêm phim
    const handleAddMovie = () => {
        if (newMovie.title && newMovie.genre && newMovie.duration > 0) {
            setMovies([...movies, { ...newMovie, id: movies.length + 1 }]);
            setNewMovie({ id: 0, title: "", genre: "", duration: 0 });
        }
    };

    // Xử lý xóa phim
    const handleDeleteMovie = (id: number) => {
        setMovies(movies.filter((movie) => movie.id !== id));
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">🎬 Quản lý phim</h1>

            {/* Form thêm phim */}
            <div className="bg-gray-800 p-4 rounded-lg mb-6">
                <h2 className="text-xl text-white font-semibold mb-4">Thêm phim mới</h2>
                <div className="flex space-x-4">
                    <input
                        type="text"
                        placeholder="Tên phim"
                        className="p-2 w-1/3 rounded-lg bg-gray-700 text-white border border-gray-600"
                        value={newMovie.title}
                        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                    />
                    <input
                        type="text"
                        placeholder="Thể loại"
                        className="p-2 w-1/3 rounded-lg bg-gray-700 text-white border border-gray-600"
                        value={newMovie.genre}
                        onChange={(e) => setNewMovie({ ...newMovie, genre: e.target.value })}
                    />
                    <input
                        type="number"
                        placeholder="Thời lượng (phút)"
                        className="p-2 w-1/3 rounded-lg bg-gray-700 text-white border border-gray-600"
                        value={newMovie.duration}
                        onChange={(e) => setNewMovie({ ...newMovie, duration: Number(e.target.value) })}
                    />
                    <button
                        onClick={handleAddMovie}
                        className="bg-green-500 px-4 py-2 rounded-lg text-white hover:bg-green-600 flex items-center"
                    >
                        <PlusCircle size={20} className="mr-2" />
                        Thêm
                    </button>
                </div>
            </div>

            {/* Danh sách phim */}
            <table className="w-full bg-gray-800 text-white rounded-lg overflow-hidden">
                <thead className="bg-gray-700">
                    <tr>
                        <th className="py-3 px-6 text-left">Tên phim</th>
                        <th className="py-3 px-6 text-left">Thể loại</th>
                        <th className="py-3 px-6 text-left">Thời lượng</th>
                        <th className="py-3 px-6 text-center">Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id} className="border-b border-gray-700">
                            <td className="py-3 px-6">{movie.title}</td>
                            <td className="py-3 px-6">{movie.genre}</td>
                            <td className="py-3 px-6">{movie.duration} phút</td>
                            <td className="py-3 px-6 text-center flex justify-center space-x-4">
                                <button className="text-yellow-400 hover:text-yellow-300">
                                    <Edit size={20} />
                                </button>
                                <button
                                    onClick={() => handleDeleteMovie(movie.id)}
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

export default Movies;
