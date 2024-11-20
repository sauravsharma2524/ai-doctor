import React from 'react';

const FourthPage = () => {
    return (
        <div className="mx-auto rounded-xl mt-5 w-full max-w-5xl bg-gray-100">
            <main className="container mx-auto py-8 px-6">
                {/* Heading */}
                <h2 className="text-2xl font-bold mb-6 text-orange-500 lg:w-2/3">
                    페블러스에서는 이러한 과정을 거쳐 데이터 품질을 진단합니다.
                </h2>

                {/* Content Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Text Section */}
                    <div>
                        <ul className="space-y-4 text-gray-700">
                            <li>세부 진단 항목에 대해 측정하고, 해당 데이터셋의 특징을 파악합니다. (예: 데이터의 양, 분포, 유형 등)</li>
                            <li>데이터의 이상치, 결측치, 중복치 등의 데이터 품질 문제를 파악합니다.</li>
                            <li>데이터 간의 관계성을 분석하여 데이터의 구조적 문제를 파악합니다.</li>
                            <li>데이터의 타입과 범위를 검사하여 데이터의 타당성을 검증합니다.</li>
                        </ul>
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center items-center">
                        <img
                            src="https://pub.mdpi-res.com/machines/machines-10-00908/article_deploy/html/images/machines-10-00908-g005.png?1666685472"
                            alt="Diagnosis Process"
                            className="w-full max-w-lg rounded-lg shadow-md object-cover"
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FourthPage;
