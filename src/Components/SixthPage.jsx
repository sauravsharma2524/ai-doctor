import React from "react";

const SixthPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
           

            {/* Main Content */}
            <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                        <div className="bg-gray-200 p-4 rounded">
                            <img
                                src="https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-031-04195-2_110-1/MediaObjects/530007_0_En_110-1_Fig6_HTML.png"
                                alt="Left Image"
                                className="w-full h-48 sm:h-64 md:h-72 lg:h-80 object-cover rounded"
                            />
                        </div>
                        <div className="bg-gray-200 p-4 rounded mt-4">
                            <h2 className="text-xl text-orange-500 font-bold mb-2">
                                전체 분포
                            </h2>
                            <p className="text-sm sm:text-base">
                                고차원의 데이터 임베딩 벡터를 시각화를 위해 2차원으로 투영하여
                                표시합니다. 클러스터의 유무 등 데이터의 전체적인 형성을 가늠할 수
                                있습니다.
                            </p>
                            <div className="flex flex-wrap justify-between mt-4">
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div>
                                    <span className="text-sm sm:text-base">Origin</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                                    <span className="text-sm sm:text-base">Mean Feature</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
                                    <span className="text-sm sm:text-base">Mean Image</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                            {/* Image Grid */}
                            <div className="bg-gray-200 p-4 rounded">
                                <img
                                    src="https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-031-04195-2_110-1/MediaObjects/530007_0_En_110-1_Fig2_HTML.png"
                                    alt="Image 1"
                                    className="w-full h-32 sm:h-48 object-cover rounded"
                                />
                                <p className="text-center mt-2 text-sm sm:text-base">
                                    HOODED MERGANS
                                </p>
                            </div>
                            <div className="bg-gray-200 p-4 rounded">
                                <img
                                    src="https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-031-04195-2_110-1/MediaObjects/530007_0_En_110-1_Fig2_HTML.png"
                                    alt="Image 2"
                                    className="w-full h-32 sm:h-48 object-cover rounded"
                                />
                                <p className="text-center mt-2 text-sm sm:text-base">
                                    BUSH TURKEY
                                </p>
                            </div>
                            <div className="bg-gray-200 p-4 rounded">
                                <img
                                    src="https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-031-04195-2_110-1/MediaObjects/530007_0_En_110-1_Fig2_HTML.png"
                                    alt="Image 3"
                                    className="w-full h-32 sm:h-48 object-cover rounded"
                                />
                                <p className="text-center mt-2 text-sm sm:text-base">
                                    DARWINS FLYCACHER
                                </p>
                            </div>
                            <div className="bg-gray-200 p-4 rounded">
                                <img
                                    src="https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-031-04195-2_110-1/MediaObjects/530007_0_En_110-1_Fig2_HTML.png"
                                    alt="Image 4"
                                    className="w-full h-32 sm:h-48 object-cover rounded"
                                />
                                <p className="text-center mt-2 text-sm sm:text-base">
                                    HOODED MERGANS
                                </p>
                            </div>
                            <div className="bg-gray-200 p-4 rounded">
                                <img
                                    src="https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-031-04195-2_110-1/MediaObjects/530007_0_En_110-1_Fig2_HTML.png"
                                    alt="Image 5"
                                    className="w-full h-32 sm:h-48 object-cover rounded"
                                />
                                <p className="text-center mt-2 text-sm sm:text-base">
                                    BUSH TURKEY
                                </p>
                            </div>
                            <div className="bg-gray-200 p-4 rounded">
                                <img
                                    src="https://media.springernature.com/lw685/springer-static/image/chp%3A10.1007%2F978-3-031-04195-2_110-1/MediaObjects/530007_0_En_110-1_Fig2_HTML.png"
                                    alt="Image 6"
                                    className="w-full h-32 sm:h-48 object-cover rounded"
                                />
                                <p className="text-center mt-2 text-sm sm:text-base">
                                    DARWINS FLYCACHER
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SixthPage;
