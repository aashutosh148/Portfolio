// src/components/ProjectCard.jsx
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, image, liveLink, githubLink }) => {
    return (
        <div className="bg-[#45505a] rounded-md shadow-lg overflow-hidden">
            <div className="w-full h-60 p-2">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover rounded-md"
                />
            </div>
            <div className="p-6">
                <h3 className="text-2xl font-bold text-[#45A29E] mb-2">{title}</h3>
                <p className="text-[#C5C6C7] mb-4">{description}</p>
                <div className="flex justify-between items-center">
                    <div>
                        {liveLink && (
                            <a
                                href={liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#45A29E] text-white px-4 py-2 rounded hover:bg-[#45A29E] transition duration-300 inline-block"
                            >
                                <FaExternalLinkAlt className="inline mr-2" /> Live Demo
                            </a>
                        )}
                    </div>
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0B0C10] text-[#45A29E] px-4 py-2 rounded hover:bg-[#45A29E] hover:text-white transition duration-300 inline-block"
                    >
                        <FaGithub className="inline mr-2" /> GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
