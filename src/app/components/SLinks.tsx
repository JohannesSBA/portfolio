import React from "react";
import { FiGithub, FiLinkedin, FiInstagram } from "react-icons/fi";

const SLinks = () => {
    return (
        <div className="absolute bottom-0 flex flex-col align-middle invisible md:visible">
            <div className="w-1 h-24 bg-white rounder-lg border-2 ml-auto mr-auto"></div>
            <ul className="menu rounded-box">
                <li>
                    <a
                        href="https://www.linkedin.com/in/johannes-bekele/"
                        target="_blank"
                    >
                        <FiLinkedin size={30} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/johannes-bekele/"
                        target="_blank"
                    >
                        <FiGithub size={30} />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/johannes-bekele/"
                        target="_blank"
                    >
                        <FiInstagram size={30} />
                    </a>
                </li>
            </ul>
            <div className="w-1 h-24 bg-white rounder-lg border-2 ml-auto mr-auto"></div>
        </div>
    );
};

export default SLinks;

FiGithub;
FiLinkedin;
FiInstagram;
