import React from "react";

const FirstPage = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            {/* Header */}
            <header className="sticky top-0 z-10 w-full bg-white shadow-md">
                <div className="flex justify-between items-center py-4 px-4 md:px-16 lg:px-32">
                    <h1 className="text-orange-500 font-bold text-2xl">DataClinic</h1>
                    <nav className="hidden md:flex space-x-6">
                        <a href="#about" className="text-gray-600 hover:text-orange-500">
                            About Us
                        </a>
                        <a href="#services" className="text-gray-600 hover:text-orange-500">
                            Services
                        </a>
                        <a href="#pricing" className="text-gray-600 hover:text-orange-500">
                            Pricing
                        </a>
                        <a href="#contact" className="text-gray-600 hover:text-orange-500">
                            Contact Us
                        </a>
                    </nav>
                    <div className="flex space-x-4">
                        <button className="text-gray-600 hidden sm:block">Contact us</button>
                        <button className="text-gray-600 hidden sm:block">Login</button>
                        <button className="text-white bg-orange-500 px-4 py-2 rounded">
                            진단해 주세요!
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Section */}
            <main className="flex flex-col items-center mt-12 px-4 md:px-16 lg:px-32">
                {/* Text Content */}
                <div className="text-center max-w-2xl">
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-500 leading-tight">
                        AI Data Doctor
                    </h2>
                    <p className="text-gray-600 mt-4 leading-relaxed">
                        데이터를 위한 종합병원, 데이터 클리닉은 데이터의 품질 진단부터
                        개선에 이르는 전과정을 원스탑 서비스로 제공합니다.
                    </p>
                </div>

                {/* Images Section */}
                <div className="relative mt-12 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row">
                    {/* Large Laptop Image */}
                    <div className="w-full md:w-3/4 lg:w-2/3">
                        <img
                            src="https://media.croma.com/image/upload/v1663350670/Croma%20Assets/Computers%20Peripherals/Laptop/Images/245235_0_lkhkv1.png"
                            alt="Laptop"
                            className="w-full object-cover rounded-xl shadow-lg"
                        />
                    </div>
                    {/* Smaller Phone Image */}
                    <div className="w-1/2 md:w-1/3 lg:w-1/4 -mt-8 md:-mt-12 lg:-mt-16">
                        <img
                            src="https://media.croma.com/image/upload/v1708671239/Croma%20Assets/Communication/Mobiles/Images/243466_0_jepbxv.png"
                            alt="Phone"
                            className="w-full object-cover rounded-xl shadow-lg"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FirstPage;
