import React from 'react';

const SeventhPage = () => {
    return (
        <div className="bg-gray-100">
            <main className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold mb-4 text-orange-500">데이터 클리닉</h2>

                <div className="space-y-8">
                    {/* First Section */}
                    <div className="grid p-3 bg-orange-100 grid-cols-1 md:grid-cols-2 gap-4 ">
                        <div className="w-full md:w-2/3">
                            <h3 className="text-xl font-bold mb-2 text-orange-500">클래스별 밀도</h3>
                            <p className="text-gray-700">
                                대표적인 클래스의 밀도 분포를 밀도 차트로 표시합니다. 맨 왼쪽과 오른쪽에 각각 평균 밀도가 가장 낮고 높은 클래스를 표시합니다.
                            </p>
                        </div>
                        <div>
                            <img
                                className="bg-gray-400 rounded-xl w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                                src="https://media.istockphoto.com/id/917906828/vector/set-elements-of-infographics.jpg?s=612x612&w=0&k=20&c=jKgD_RfQR9q7NKFuLU3fDXk9h2Fh38xpdzqpLmebFy0="
                                alt="chart image"
                            />
                        </div>
                    </div>

                    {/* Second Section */}
                    <div className="grid p-1 bg-orange-100 grid-cols-1 md:grid-cols-2 gap-4 ">
                        <div className="w-full md:w-2/3">
                            <h3 className="text-xl font-bold mb-2 text-orange-500">클래스별 밀도</h3>
                            <p className="text-gray-700">
                                대표적인 클래스의 밀도 분포를 밀도 차트로 표시합니다. 맨 왼쪽과 오른쪽에 각각 평균 밀도가 가장 낮고 높은 클래스를 표시합니다.
                            </p>
                        </div>
                        <div>
                            <img
                                className="bg-gray-400 rounded-xl w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                                src="https://static.vecteezy.com/system/resources/thumbnails/002/178/646/small/bar-chart-graph-diagram-statistical-business-infographic-element-template-vector.jpg"
                                alt="chart image"
                            />
                        </div>
                    </div>

                    {/* Third Section */}
                    <div className="grid p-3 bg-orange-100 grid-cols-1 md:grid-cols-2 gap-4 ">
                        <div className="w-full md:w-2/3">
                            <h3 className="text-xl font-bold mb-2 text-orange-500">클래스별 밀도</h3>
                            <p className="text-gray-700">
                                대표적인 클래스의 밀도 분포를 밀도 차트로 표시합니다. 맨 왼쪽과 오른쪽에 각각 평균 밀도가 가장 낮고 높은 클래스를 표시합니다.
                            </p>
                        </div>
                        <div>
                            <img
                                className="bg-gray-400 rounded-xl w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                                src="https://media.geeksforgeeks.org/wp-content/uploads/20230804093425/ing.png"
                                alt="chart image"
                            />
                        </div>
                    </div>

                    {/* Fourth Section */}
                    <div className="grid p-3 bg-orange-100 grid-cols-1 md:grid-cols-2 gap-4 ">
                        <div className="w-full md:w-2/3">
                            <h3 className="text-xl font-bold mb-2 text-orange-500">클래스별 밀도</h3>
                            <p className="text-gray-700">
                                대표적인 클래스의 밀도 분포를 밀도 차트로 표시합니다. 맨 왼쪽과 오른쪽에 각각 평균 밀도가 가장 낮고 높은 클래스를 표시합니다.
                            </p>
                        </div>
                        <div>
                            <img
                                className="bg-gray-400 rounded-xl w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
                                src="https://www150.statcan.gc.ca/edu/power-pouvoir/c-g/c-g05-2-2-eng.png"
                                alt="chart image"
                            />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SeventhPage;
