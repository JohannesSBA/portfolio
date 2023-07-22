import React from "react";
import Projects from "../components/Projects";

const page = () => {
    return (
        <div className="bg-[#740CDC] h h-screen w-screen">
            <div className="w-screen  flex justify-center h-36">
                <h1 className="mt-12 font-bold text-4xl">Projects</h1>
            </div>
            <div className=" object-contain md:flex justify-around ">
                <Projects
                    img="/Airtable.png"
                    title="Journaling App"
                    desc="Digital Jounraling App with authentication"
                    skills1="NextJs"
                    skills2="MongoDB"
                    skills3={null}
                    skills4={null}
                    limitattions={null}
                />
                <Projects
                    img="/Airtable.png"
                    title="Job Application Tracker"
                    desc="JobTracker allows you to keep track of your applications while job hunting. For each job you can view its details,
                 keep a checlist and upload related files(e.g. resume). You can also add you interviews to a calendar."
                    skills1="NextJs"
                    skills2="MongoDB"
                />
            </div>
        </div>
    );
};

export default page;
