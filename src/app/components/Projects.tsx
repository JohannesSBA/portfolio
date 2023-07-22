import React from "react";

interface props {
    skills1: string | null;
    skills2: string | null;
    skills3: string | null;
    skills4: string | null;
    limitattions: string | null;
    title: string;
    desc: string;
    img: string | undefined;
}

const Projects = (props: props) => {
    return (
        <div className="card w-96 shadow-xl object-contain">
            <figure>
                <img src={props.img} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.desc}</p>
                <p>{props.limitattions}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-primary">{props.skills1}</div>
                    <div className="badge badge-outline">{props.skills2}</div>
                    <div className="badge badge-outline">{props.skills3}</div>
                    <div className="badge badge-outline">{props.skills4}</div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
