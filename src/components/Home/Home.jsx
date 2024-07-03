import React from 'react';
import TypeWrite from './TypeWrite';
import Particles from 'react-tsparticles';

const Home = () => {
    return (
        <>
        <div className="mt-[80px] md:mt-[130px] min-h-auto flex items-center px-8 mx-6 ">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full">
                <div className="text-[#C5C6C7] mb-12 lg:mb-0 lg:w-1/2">
                    <h1 className="text-5xl font-bold mb-6">
                        Hi There! <span className="wave inline-block">👋</span>
                    </h1>
                    <h2 className="text-2xl md:text-4xl font-bold mb-6">
                        <span className="text-[#C5C6C7]">I am </span>
                        <span className="text-[#66FCF1]">Aashutosh Singh</span>
                    </h2>
                    <span className="text-2xl text-[#45A29E]"><TypeWrite /></span>
                </div>

                <div className="lg:w-1/2 flex justify-center lg:justify-end">
                    <img 
                        src="/Programming-amico.png" 
                        alt="Developer" 
                        className="w-full max-w-md " 
                    />
                </div>
            </div>
        </div>
        </>
    );
};

export default Home;