"use client";
import Spline from "@splinetool/react-spline";
import { Canvas } from "react-three-fiber";

const Computer = () => {
    return (
        <div className="max-w-4xl">
            <Spline
                className=""
                scene="https://prod.spline.design/dD1ASu93F6qwiZ8S/scene.splinecode"
            />
        </div>
    );
};

export default Computer;
