// SecondPage.jsx
import React from "react";

const SecondPage = () => {
    return (
        <div className="min-h-auto bg-gray-50 flex flex-col items-center py-8 px-4 md:px-16 lg:px-32">
            

            {/* Content Section */}
            <main className="max-w-5xl text-center space-y-8">
                <h2 className="text-4xl font-bold text-orange-500">
                    데이터 품질 진단에서 개선까지
                </h2>
                <p className="text-gray-600">
                    데이터 클리닉의 정확한 품질 진단에 근거한 데이터 치료로
                    안정성, 효율성, 신뢰성이 보장되는 AI-레디 데이터를 준비하세요!
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-row-2 gap-8 text-left">
                    <div>
                        <h3 className="text-lg font-semibold text-orange-500">
                            작업 중립적 (Task-neutral) 품질 진단
                        </h3>
                        <p className="text-gray-600">
                            데이터셋의 도메인 적용 이전에 전반적인 데이터 상태와 품질 특성을
                            진단 수령.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-orange-500">
                            작업 특이적 (Task-specific) 품질 진단
                        </h3>
                        <p className="text-gray-600">
                            특정 작업에 대한 목표 설정하여 고급 진단 수행.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-black">
                            작업 중립적 (Task-neutral) 품질 진단
                        </h3>
                        <p className="text-orange-500">
                            데이터셋의 도메인 적용 이전에 전반적인 데이터 상태와 품질 특성을
                            진단 수령.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-black">
                            작업 특이적 (Task-specific) 품질 진단
                        </h3>
                        <p className="text-orange-500">
                            특정 작업에 대한 목표 설정하여 고급 진단 수행.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SecondPage;
