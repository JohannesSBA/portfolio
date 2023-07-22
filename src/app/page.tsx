import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Computer from "./components/Computer";
import { useEffect, useState } from "react";
import SLinks from "./components/SLinks";
import NavBar from "./components/NavBar";
import { lazy } from "react";

export default function Home() {
    const MarkPreview = lazy(() => import("./components/Computer"));
    return (
        <div className="bg-[#740CDC] max-h-screen overflow-hidden">
            <NavBar />
            <MarkPreview />
            <main>
                <Hero />
            </main>
            <SLinks />
        </div>
    );
}
