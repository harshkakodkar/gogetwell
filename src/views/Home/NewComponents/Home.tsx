const Home = () => {
    return (
        <>
            {/* Main Content */}
            <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 bg-white">


                <div className="text-center relative z-10 p-5">
                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 pb-2 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent leading-[1.15]">
                        AI Front Office
                        <br className="hidden md:block" />
                        for Healthcare Agents
                    </h1>


                    {/* Subheading */}
                    <div className="mb-10 space-y-4 max-w-3xl mx-auto">
                        <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                            Create AI Store in <span className="font-bold text-gray-900  decoration-2 underline-offset-4">under 2 minutes</span>
                        </p>
                        <p className="text-2xl md:text-3xl text-gray-700 font-medium">
                            Scale with <span className="font-bold text-gray-900  decoration-2 underline-offset-4">Digital Marketing</span>
                        </p>
                    </div>

                    {/* Button */}
                    <div className="mb-16">
                        <button className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold px-10 py-5 rounded-full hover:shadow-xl transition-all duration-300 group">
                            <span className="relative z-10 flex items-center justify-center space-x-2">
                                <span>Get Started</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </span>
                            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {/* Card 1 */}
                        <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 "></div>
                            <div className="relative p-8 z-10">
                                <h2 className="text-5xl font-bold text-gray-900 mb-3">2100+</h2>
                                <p className="text-gray-700 font-medium text-lg">Qualified Doctors</p>
                                
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 "></div>
                            <div className="relative p-8 z-10">
                                <h2 className="text-5xl font-bold text-gray-900 mb-3">1000+</h2>
                                <p className="text-gray-700 font-medium text-lg">Hospitals</p>
                               
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group border border-gray-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 "></div>
                            <div className="relative p-8 z-10">
                                <h2 className="text-5xl font-bold text-gray-900 mb-3">800+</h2>
                                <p className="text-gray-700 font-medium text-lg">Treatment Plans</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;