import React from 'react';
import { FaGithub, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/aashutosh148' },
    { icon: FaXTwitter, url: 'https://x.com/aashutosh148' },
    { icon: FaLinkedin, url: 'https://linkedin.com/in/aashutosh148' },
  ];

  return (
    <div className="bg-[#1d2835] text-[#C5C6C7] py-2 px-4 w-full bottom-0">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 text-sm">
          -By Aashutosh Singh
        </div>

        <div className="text-center mb-4 md:mb-0">
          <p className="text-lg mb-4">
            Feel free to <span className="text-[#66FCF1]">CONNECT</span> with me
          </p>
          <div className="flex justify-center space-x-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#C5C6C7] text-[#0B0C10] p-2 rounded-full hover:bg-[#66FCF1] hover:text-white transition-colors duration-300"
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="text-sm">
          &copy; 2024 @aashutosh148
        </div>
      </div>
    </div>
  );
};

export default Footer;
