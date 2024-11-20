import React from 'react';

const FifthPage = () => {
    return (
        <div className="">
            <main className="container mx-auto py-8 px-6">
                <h2 className="text-2xl font-bold mb-4 text-orange-500">데이터 렌즈와 이미징</h2>

                <p className="text-gray-700">
                    데이터 클리닉의 진단 체계는 데이터의 품질과 구조를 진단 레벨 별로 평가하고 개선하는 프레임워크를 통하여, 고객의 데이터를 효과적으로 진단하고 관리할 수 있도록 설계되었습니다.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-orange-500">데이터 이미징</h3>
                        <p className="text-gray-700">
                            데이터 이미징(Data Imaging)은 복잡한 다차원의 데이터셋을 시각화하고 해석하기 위한 기술로서, 페블러스의 핵심 기술입니다. 대규모 데이터셋을 목적에 맞게 구성된 임베딩 공간으로 변환하며, 신경망이 데이터의 구조적 특성을 이해합니다. 데이터의 패턴과 관계에 대한 심층적인 인사이드를 확보하여 정보에 입각한 의사 결정과 예측 분석을 돕습니다.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-orange-500">데이터의 내재적 차원</h3>
                        <p className="text-gray-700">
                            데이터셋 전체를 데이터렌즈(DataLens)에 통과시켜 특징(Features) 벡터를 추출하는 과정에서 입력데이터셋에 최적화된 특징 벡터들의 최소 차원이 산출되는데, 이 최소 차원을 관찰 차원 혹은 내재적 차원(Intrinsic Dimension)이라 정의합니다. 관찰 차원은 일반형 렌즈에서 출력된 특징 벡터들의 최소 차원이고, 내재적 차원은 커스텀 렌즈에서 출력된 특징 벡터들의 최소 차원입니다.
                        </p>
                    </div>
                </div>

                <h2 className="text-2xl font-bold mt-16 mb-4 text-orange-500">레벨 II vs 레벨 III 진단</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-orange-500">레벨 II 진단</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>빠르게 도입이 가능한 기성 클러스터링 신경망을 활용하여 데이터 렌즈를 구성합니다.</li>
                            <li>데이터의 기타 속성 및 분포 속성 측정을 통해 데이터의 품질과 구조에 대한 평가에 초점을 맞추어 개선이 필요한 영역 정보를 식별합니다.</li>
                            <li>범용 임베딩 공간에서의 분포 분석을 통해 학습데이터셋의 편향과 같은 문제를 식별할 수 있습니다.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2 text-orange-500">레벨 III 진단</h3>
                        <ul className="list-disc list-inside text-gray-700">
                            <li>작업과 도메인에 최적화된 맞춤형 인공신경망을 이용하여 데이터렌즈를 구성합니다.</li>
                            <li>레벨 II 진단에 더해서, 심층 진단이 가능한 고급 지표를 통해 데이터의 복잡한 문제에 대한 인사이트와 개선 솔루션을 제공합니다.</li>
                            <li>데이터 특이적 임베딩 공간에서 학습데이터셋의 문제를 더욱 정밀하게 발견하고 정밀 타기팅 합성데이터와 같은 개선 방안을 찾을 수 있습니다.</li>
                        </ul>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FifthPage;