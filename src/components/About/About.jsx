import React from 'react';
import CP from './CP.jsx'
import { FaStar } from 'react-icons/fa';

const About = () => {
    const achievements = [
        "Got Global rank 67 in Starters 124 DIV-3.",
        "Achieved 3 star Rating(1672) on CodeChef Platform",
        "Achived maximum rating of 1816 on leetcode",
        "Attended More than 100 Contest across Various Platforms, Solved 800+ Problems.",
        " SSB RECOMENDED- All India Rank 226-UPSC NDA 2 2021"
    ];

    const technicalSkills = {
        "Programming Language:": "C, C++, JavaScript, Java, Python",
        "Frameworks/ Libraries:": "React.js, Node.js, Express.js, TailwindCSS, BootStrap",
        "Database:": "MySQL, MongoDB, PostgreSQL"
    };

    return (
        <div className="mt-[80px] md:mt-[130px] min-h-auto flex items-center mx-6 text-[#C5C6C7] p-8 ">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold mb-8 text-[#66FCF1]">About Me</h1>

                <div className="flex flex-col lg:flex-row gap-12 mb-12">
                    <div className="lg:w-2/3">
                        <p className="text-xl mb-6">
                            Hi!! Everyone, I am Aashutosh Singh. Aspiring Web developer.
                        </p>
                        <h2 className="text-2xl font-semibold mb-4 text-[#45A29E]">
                            Some my achievements:
                        </h2>
                        <ul className="space-y-2">
                            {achievements.map((achievement, index) => (
                                <li key={index} className="flex items-start">
                                    <FaStar className="text-[#66FCF1] mt-1 mr-2 flex-shrink-0" />
                                    <span>{achievement}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/3">
                        <img src="/about.png" alt="Programming Illustration" className="w-full" />
                    </div>
                </div>
                <CP />
                <div className="bg-[#1f2833] rounded-lg p-6 shadow-2xl">
                    <h2 className="text-3xl font-bold mb-6 text-center text-[#66FCF1]">My Technical Skills</h2>
                    {Object.entries(technicalSkills).map(([category, skills], index) => (
                        <div key={index} className="mb-4">
                            <span className="text-[#45A29E] font-semibold">{category}</span>{" "}
                            <span className="text-[#C5C6C7]">{skills}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;