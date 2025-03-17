import { useState } from "react";

const seatTypes = {
    normal: { color: "bg-gray-500", price: 50000 },
    vip: { color: "bg-yellow-500", price: 80000 },
    couple: { color: "bg-pink-500", price: 120000 },
};

interface Seat {
    id: number;
    booked: boolean;
    type: keyof typeof seatTypes;
}

const seats: Seat[] = Array.from({ length: 150 }, (_, i) => ({
    id: i + 1,
    booked: Math.random() > 0.8, // 20% ghế bị đặt trước
    type: i % 15 === 0 ? "couple" : i % 5 === 0 ? "vip" : "normal",
}));

export default function SeatSelection() {
    const [selectedSeats, setSelectedSeats] = useState<number[]>([]);

    const toggleSeatSelection = (seat: Seat) => {
        if (seat.booked) return;
        setSelectedSeats((prev) =>
            prev.includes(seat.id) ? prev.filter((id) => id !== seat.id) : [...prev, seat.id]
        );
    };

    const totalPrice = selectedSeats.reduce(
        (sum, id) => sum + (seats.find((seat) => seat.id === id)?.type ? seatTypes[seats.find((seat) => seat.id === id)!.type].price : 0),
        0
    );

    return (
        <div className="container mx-auto p-6 bg-black text-white min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-6">Chọn Ghế Xem Phim</h1>
            <div className=" w-full h-12 flex items-center justify-center text-lg font-semibold mb-6">
            <div className="bg-gray-900 w-1/2 h-12 flex items-center justify-center text-lg font-semibold mb-6">
                <i className="fas fa-film mr-2"></i> Màn Hình
            </div>
            </div>
            <div className="flex flex-wrap justify-center space-x-1 space-y-1 w-1/2 mx-auto">
                {seats.map((seat) => (
                    <button
                        key={seat.id}
                        className={`w-7 h-7 flex items-center justify-center rounded-md 
                ${seat.booked ? "bg-gray-700 cursor-not-allowed" : seatTypes[seat.type].color} 
                ${selectedSeats.includes(seat.id) ? "ring-2 ring-white" : ""}`}
                        disabled={seat.booked}
                        onClick={() => toggleSeatSelection(seat)}
                    >
                        <i className="fas fa-chair"></i>
                    </button>
                ))}
            </div>


            <div className="mt-6 text-center">
                <p className="text-lg">Tổng tiền: <span className="text-yellow-400 font-bold">{totalPrice.toLocaleString()} VNĐ</span></p>
                <button className={`mt-4 px-6 py-2 rounded-lg text-white ${selectedSeats.length ? "bg-red-600" : "bg-gray-700 cursor-not-allowed"}`} disabled={!selectedSeats.length}>
                    <i className="fas fa-ticket-alt mr-2"></i> Đặt vé
                </button>
            </div>
        </div>
    );
}
