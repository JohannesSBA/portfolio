import React from "react";
import Nav from "../components/Nav";

const page = () => {
    return (
        <div className="min-h-screen bg-[#740CDC] overflow-hidden">
            <div className="rotate-45 translate-y-96">
                <Nav />
            </div>
            <div className="-rotate-45 translate-y-96">
                <Nav />
            </div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src="/Airtable.png"
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">
                            My Name is Johannes Bekele!
                        </h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary uppercase">
                            Get My resume
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
