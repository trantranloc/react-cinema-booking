import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faTicketAlt, faPlayCircle, faEye } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const movies = [
    { id: 1, title: "Avengers: Endgame", image: "https://via.placeholder.com/300" },
    { id: 2, title: "Interstellar", image: "https://via.placeholder.com/300" },
    { id: 3, title: "Inception", image: "https://via.placeholder.com/300" },
    { id: 4, title: "The Dark Knight", image: "https://via.placeholder.com/300" },
    { id: 5, title: "Titanic", image: "https://via.placeholder.com/300" },
];

export default function Home() {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            {/* Navbar */}
            <nav className="bg-gray-800 p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                    <FontAwesomeIcon icon={faFilm} /> Cinema Booking
                </h1>
            </nav>

            {/* Banner */}
            
            {/* <div className="relative w-full h-64 bg-gray-700 flex items-center justify-center">
                <h2 className="text-4xl font-bold">Xem phim ngay hôm nay!</h2>
                <FontAwesomeIcon icon={faPlayCircle} className="absolute right-5 bottom-5 text-4xl text-red-500 cursor-pointer" />
            </div> */}
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    1024: { slidesPerView: 1 },
                }}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {movies.map((movie) => (
                    <SwiperSlide key={movie.id}>
                        <div className="relative w-full h-64 bg-gray-700 flex items-center justify-center">
                            <h2 className="text-4xl font-bold">Xem phim ngay hôm nay!</h2>
                            <FontAwesomeIcon icon={faPlayCircle} className="absolute right-5 bottom-5 text-4xl text-red-500 cursor-pointer" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* Danh sách phim */}
            <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Phim Đang Chiếu</h2>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    pagination={{ clickable: true }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {movies.map((movie) => (
                        <SwiperSlide key={movie.id}>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <img src={movie.image} alt={movie.title} className="w-full h-48 object-cover rounded-lg" />
                                <h3 className="mt-2 text-lg font-semibold">{movie.title}</h3>
                                <div className="flex gap-2 my-2">
                                    <button className="bg-red-500 px-4 py-2 rounded flex items-center gap-2">
                                        <FontAwesomeIcon icon={faTicketAlt} /> Đặt Vé
                                    </button>
                                    <button className="bg-blue-500 px-4 py-2 rounded flex items-center gap-2">
                                        <FontAwesomeIcon icon={faEye} /> Chi Tiết
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
