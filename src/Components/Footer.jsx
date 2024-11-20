import React from 'react';

function Footer() {
    return (
        <footer className="bg-white">
            <div className="container mx-auto py-10 px-4">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    <div>
                        <h3 className="text-2xl text-orange-500 font-bold mb-4">DataClinic</h3>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="text-gray-700 hover:text-orange-500">데이터 클리닉이란?</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-700 hover:text-orange-500">데이터 클리닉 기술</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-700 hover:text-orange-500">요금제</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-700 hover:text-orange-500">진단 신청하기</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-700 hover:text-orange-500">마이 데이터 클리닉</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-orange-500 mb-4">데이터셋</h3>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="text-gray-700 hover:text-orange-500">웹 샘플</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-700 hover:text-orange-500">PDF 샘플</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-orange-500 mb-4">진단리포트</h3>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="text-gray-700 hover:text-orange-500">진단리포트 활용 가이드</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-orange-500 mb-4">개선사례</h3>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-orange-500 mb-4">합성데이터</h3>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold text-orange-500 mb-4">패블러스</h3>
                        <ul className="list-none">
                            <li className="mb-2">
                                <a href="#" className="text-gray-700 hover:text-orange-500">블러스 소개</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="text-gray-700 hover:text-orange-500">문의하기</a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom Section */}
                <div className="border-t border-gray-300 mt-10 pt-10">
                    <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0">
                        {/* Left Section */}
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Pebblous</h3>
                            <p className="text-gray-700">
                                Copyright © Pebblous.ai All rights reserved
                            </p>
                        </div>

                        {/* Contact Info */}
                        <div className="text-gray-700 text-sm space-y-2">
                            <p>Email: contact@pebblous.ai</p>
                            <p>Tel: 044-589-3824</p>
                            <p>Office | South Korea: Seoul, Daejeon, Pohang</p>
                            <p>US: Seattle, Wob</p>
                            <p>Web: pebblous.ai</p>
                        </div>

                        {/* Social Icons */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-700 hover:text-orange-500">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="text-gray-700 hover:text-orange-500">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-700 hover:text-orange-500">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-700 hover:text-orange-500">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
