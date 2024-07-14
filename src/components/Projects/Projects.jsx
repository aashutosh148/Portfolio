// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';
import  { motion } from "framer-motion" 

const Projects = () => {
    const projects = [
        {
            title: "Youtube Stats",
            description: "Analyze YouTube playlists to calculate total duration, average video duration, and adjusted playback times at different speeds.",
            image: "./Projects/yt-stat.png",
            liveLink: "https://playlist-length.netlify.app/",
            githubLink: "https://github.com/aashutosh148/PlayList_Stat"
        },
        {
            title: "Attendance & Vacation Panner",
            description: "It helps students calculate fall in their attendance in case they take leave. Also Help them to get longest Holiday length with least Off Days",
            image: "./Projects/vacation.png",
            liveLink: "https://aashutosh148.github.io/UniHelp/resources/HolidayPlanner/",
            githubLink: "https://github.com/aashutosh148/UniHelp"
        },
        {
            title: "Chat Server & user-auth",
            description: "Chat Application, with secure user-auth and real-time chat functionality. This project is built using Node.js, Express.js, MongoDB, Socket.IO, and HBS",
            image: "./Projects/chatServ.png",
            liveLink: null,
            githubLink: "https://github.com/aashutosh148/ChatRoom-with-auth"
        },
        {
            title: "User-Authentication With JWT",
            description: "User authentication using JWT, endpoints for user registration, login/logout, access to protected routes, token revocation and token expiration.",
            image: "./Projects/jwt.png",
            liveLink: null,
            githubLink: "https://github.com/aashutosh148/User-auth-JWT"
        },
        {
            title: "Headlines",
            description: "Integrated an external API to fetch and cache realtime news headlines on a backend server. Use React on the frontend to display headlines.",
            image: "./Projects/headlines.png",
            liveLink: null,
            githubLink: "https://github.com/aashutosh148/Headlines"
        }
    ];

    return (
        <div className="h-auto mt-[130px] mb-12 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-4xl font-bold text-[#66FCF1] text-center mb-12"
                >
                    My Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <ProjectCard {...project} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;