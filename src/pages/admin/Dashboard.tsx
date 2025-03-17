const Dashboard = () => {
    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <h1 className="text-3xl font-bold mb-6">📊 Thống kê tổng quan</h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">🎬 Số lượng phim</h3>
                    <p className="text-2xl mt-2 text-blue-400">120</p>
                </div>
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">🎥 Suất chiếu</h3>
                    <p className="text-2xl mt-2 text-green-400">450</p>
                </div>
                <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-semibold">🎟️ Vé đã bán</h3>
                    <p className="text-2xl mt-2 text-purple-400">10,000</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
