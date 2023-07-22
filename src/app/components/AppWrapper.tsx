"use client";

import type { ReactNode } from "react";
import AnimatedCursor from "react-animated-cursor";

export const AppWrapper = ({ children }: { children: ReactNode }) => {
    return (
        <div>
            {children}
            <AnimatedCursor
                innerSize={10}
                outerSize={10}
                color="0, 0, 0"
                outerAlpha={0.2}
                innerScale={0.5}
                outerScale={5}
            />
        </div>
    );
};
