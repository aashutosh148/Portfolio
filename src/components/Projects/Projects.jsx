// src/components/Projects.jsx
import React from 'react';
import ProjectCard from './ProjectCard';

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
      title: "Headlines",
      description: "Integrated an external API to fetch and cache realtime news headlines on a backend server. Use React on the frontend to display headlines.",
      image: "./Projects/headlines.png",
      liveLink: null,
      githubLink: "https://github.com/aashutosh148/Headlines"
    },
    {
      title: "Headlines",
      description: "Integrated an external API to fetch and cache realtime news headlines on a backend server. Use React on the frontend to display headlines.",
      image: "./Projects/headlines.png",
      liveLink: null,
      githubLink: "https://github.com/aashutosh148/Headlines"
    },
    {
      title: "Headlines",
      description: "Integrated an external API to fetch and cache realtime news headlines on a backend server. Use React on the frontend to display headlines.",
      image: "./Projects/headlines.png",
      liveLink: null,
      githubLink: "https://github.com/aashutosh148/Headlines"
    },
    {
      title: "Headlines",
      description: "Integrated an external API to fetch and cache realtime news headlines on a backend server. Use React on the frontend to display headlines.",
      image: "./Projects/headlines.png",
      liveLink: 'njkb',
      githubLink: "https://github.com/aashutosh148/Headlines"
    }
  ];

  return (
    <div className="h-auto mt-[130px] mb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#66FCF1] text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;