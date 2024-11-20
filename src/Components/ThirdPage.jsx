// ThirdPage.jsx
import React from "react";

const ThirdPage = () => {
    return (
        <div className="min-h-screen bg-orange-50 flex flex-col items-center py-8 px-4 md:px-16 lg:px-32">

            {/* Content Section */}
            <main className="max-w-5xl grid grid-cols-2 text-center space-y-8">
                <h2 className="text-3xl grid font-bold text-orange-500">
                    데이터 클리닉의 프로세스
                </h2>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-row-2 lg:row-row-4 gap-8">
                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-orange-500">
                            이미징 
                        </h3>
                        <p className="text-gray-600">데이터셋의 잠재력 발굴 데이터 클리닉의 정확한 품질 진단에 근거한 데이터 치료로
                    안정성, 효율성, 신뢰성이 보장되는 AI-레디 데이터를 준비하세요!.</p>
                    </div>
                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-orange-500">
                            품질 진단
                        </h3>
                        <p className="text-gray-600">정확한 데이터 분석 데이터셋의 잠재력 발굴 데이터 클리닉의 정확한 품질 진단에 근거한 데이터 치료로
                    안정성, 효율성, 신뢰성이 보장되는 AI-레디 데이터를 준비하세요!..</p>
                    </div>
                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-orange-500">
                            진단 리포트
                        </h3>
                        <p className="text-gray-600">
                            데이터 품질에 대한 설명과 근거 제공 데이터셋의 잠재력 발굴 데이터 클리닉의 정확한 품질 진단에 근거한 데이터 치료로
                    안정성, 효율성, 신뢰성이 보장되는 AI-레디 데이터를 준비하세요!..
                        </p>
                    </div>
                    <div className="text-left">
                        <h3 className="text-lg font-semibold text-orange-500">
                            품질 개선
                        </h3>
                        <p className="text-gray-600">
                            최적화된 품질 개선 서비스 제공데이터셋의 잠재력 발굴 데이터 클리닉의 정확한 품질 진단에 근거한 데이터 치료로
                    안정성, 효율성, 신뢰성이 보장되는 AI-레디 데이터를 준비하세요!.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ThirdPage;
