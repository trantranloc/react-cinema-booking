
const movie = {
    id: 1,
    title: "Avengers: Endgame",
    description: "Siêu anh hùng giải cứu thế giới trong trận chiến cuối cùng.",
    poster: "https://via.placeholder.com/300",
    showtimes: [
        { id: 1, time: "14:00", date: "2025-03-20" },
        { id: 2, time: "18:00", date: "2025-03-20" },
    ],
};

export default function MovieDetail() {
    return (
        <div className="container mx-auto p-6 bg-gray-700 text-white min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <img src={movie.poster} alt={movie.title} className="w-full rounded-lg" />
                <div>
                    <h1 className="text-3xl font-bold">{movie.title}</h1>
                    <p className="text-gray-400 mt-2">{movie.description}</p>
                    <h2 className="text-xl font-semibold mt-4">Chọn suất chiếu:</h2>
                    <div className="flex gap-3 mt-2">
                        {movie.showtimes.map((showtime) => (
                            <button
                                key={showtime.id}
                                className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-blue-500"
                            >
                                <i className="fas fa-clock mr-2"></i>
                                {showtime.time} - {showtime.date}
                            </button>
                        ))}
                    </div>
                    <button className="mt-6 bg-red-600 text-white px-6 py-2 rounded-lg w-full text-center hover:bg-red-700">
                        <i className="fas fa-ticket-alt mr-2"></i>
                        Đặt vé
                    </button>
                </div>
            </div>
        </div>
    );
}