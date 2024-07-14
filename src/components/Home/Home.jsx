import React from 'react';
import TypeWrite from './TypeWrite';
import Particles from 'react-tsparticles';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <>
            <div className="mt-[80px] md:mt-[130px] min-h-auto flex items-center p-8">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1 }}
                        className="text-[#C5C6C7] mb-12 lg:mb-0 lg:w-1/2"
                    >
                        <h1 className="text-5xl font-bold mb-6">
                            Hi There! <span className="wave inline-block">👋</span>
                        </h1>
                        <h2 className="text-2xl md:text-4xl font-bold mb-6">
                            <span className="text-[#C5C6C7]">I am </span>
                            <span className="text-[#66FCF1]">Aashutosh Singh</span>
                        </h2>
                        <span className="text-2xl text-[#45A29E]"><TypeWrite /></span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:w-1/2 flex justify-center lg:justify-end"
                    >
                        <img
                            src="/Programming-amico.png"
                            alt="Developer"
                            className="w-full max-w-md"
                        />
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default Home;