import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiCodechef, SiCodeforces } from 'react-icons/si';

const CodingProfileCard = () => {
    const profiles = [
        {
            name: 'GitHub',
            icon: FaGithub,
            url: 'https://github.com/aashutosh148',
            color: 'text-black'
        },
        {
            name: 'LeetCode',
            icon: SiLeetcode,
            url: 'https://leetcode.com/aashutosh148',
            color: 'text-[black]'
        },
        {
            name: 'CodeChef',
            icon: SiCodechef,
            url: 'https://www.codechef.com/users/aashutosh148',
            color: 'text-[#5B4638]'
        },
        {
            name: 'Codeforces',
            icon: SiCodeforces,
            url: 'https://codeforces.com/profile/aashutosh148',
            color: 'text-[#1F8ACB]'
        }
    ];

    return (
        <div className="rounded-lg shadow-lg p-6 max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-[#66FCF1] mb-4 text-center">My Coding Profiles</h2>
            <div className="grid grid-cols-2 gap-4">
                {profiles.map((profile, index) => (
                    <a
                        key={index}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 bg-[#4e9c98] rounded-lg transition-transform hover:scale-105"
                    >
                        <profile.icon className={`text-4xl ${profile.color} mb-2`} />
                        <span className="text-[white] text-sm">{profile.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default CodingProfileCard;
