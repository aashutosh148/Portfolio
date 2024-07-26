import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, liveLink, githubLink }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);

    const handleCardClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <motion.div
            className="bg-[#45505a] rounded-lg shadow-lg overflow-hidden perspective-1000"
            whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                boxShadow: "0px 10px 30px -5px rgba(0, 0, 0, 0.3)"
            }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            onClick={handleCardClick}
        >
            <div className="relative w-full h-60 p-2 overflow-hidden">
                <motion.img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-md"
                    initial={{ scale: 1 }}
                    animate={{ scale: isHovered || isClicked ? 1.1 : 1 }}
                    transition={{ duration: 0.3 }}
                />
                {(isHovered || isClicked) && (
                    <motion.div
                        className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-white text-center p-4">{description}</p>
                    </motion.div>
                )}
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-[#45A29E] mb-2">{title}</h3>
                <div className="flex justify-between items-center mt-4">
                    {liveLink && (
                        <motion.a
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#45A29E] text-white px-4 py-2 rounded-full hover:bg-[#3a8a87] transition duration-300 inline-block"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaExternalLinkAlt className="inline mr-2" /> Live Demo
                        </motion.a>
                    )}
                    <motion.a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0B0C10] text-[#45A29E] px-4 py-2 rounded-full hover:bg-[#45A29E] hover:text-white transition duration-300 inline-block"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <FaGithub className="inline mr-2" /> GitHub
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
