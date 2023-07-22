"use client";

import React from "react";
import Paralax from "./Paralax";
import { useRouter } from "next/navigation";

const Hero = () => {
    const router = useRouter();

    return (
        <div className="hero min-h-screen top-0 sm:top-full">
            <div className="hero-content max-w-xl text-center text-neutral-content fixed top-0 translate-y-36 md:translate-y-1/2 hover:scale-105 transition-all duration-700 md:backdrop-blur-lg px-12 rounded-xl">
                <div className="max-w-lg flex justify-around py-8">
                    <div>
                        <h1 className="mb-5 text-5xl font-extrabold">
                            Johannes Bekele
                        </h1>
                        <h2 className="mb-3 text-3xl font-bold">
                            Software Engineer
                        </h2>
                        <p className="mb-5">
                            I am a driven software engineer with a deep passion
                            for creating innovative solutions. With a relentless
                            pursuit of excellence, I thrive in dynamic
                            environments, collaborating with diverse teams to
                            tackle complex challenges. Equipped with a strong
                            foundation in programming languages, I am adaptable
                            and eager to learn new technologies.
                        </p>
                        <button
                            onClick={() => router.push("/about")}
                            className="btn btn-primary mx-3 invisible md:visible"
                        >
                            About Me
                        </button>
                        <button className="btn btn-primary mx-3 invisible md:visible">
                            Experiences
                        </button>
                        <button
                            className="btn btn-primary mx-3 invisible md:visible"
                            onClick={() => router.push("/projects")}
                        >
                            Projects
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
