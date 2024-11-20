import React from 'react';

function EighthPage() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-orange-500 mb-8 text-center">
                    데이터 클리닉 진단리포트 샘플 보기
                </h2>

                {/* Responsive Grid for Items */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                    {/* First PDF Item */}
                    <div className="bg-gray-200 rounded-lg shadow-md p-4 md:p-8 w-full max-w-sm h-80 flex flex-col items-center">
                        <img
                            src="path/to/your/image1.jpg"
                            alt="PDF Sample 1"
                            className="w-full h-2/3 object-contain rounded"
                        />
                        <div className="mt-4 text-2xl font-semibold text-orange-500">
                            PDF
                        </div>
                    </div>

                    {/* Second PDF Item */}
                    <div className="bg-gray-200 rounded-lg shadow-md p-4 md:p-8 w-full max-w-sm h-80 flex flex-col items-center">
                        <img
                            src="path/to/your/image2.jpg"
                            alt="PDF Sample 2"
                            className="w-full h-2/3 object-contain rounded"
                        />
                        <div className="mt-4 text-2xl font-semibold text-orange-500">
                            PDF
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EighthPage;
