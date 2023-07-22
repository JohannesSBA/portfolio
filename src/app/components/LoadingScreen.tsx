import React, { useEffect, useState } from "react";

const LoadingScreen = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 8000);
    }, []);

    return <div>LoadingScreen</div>;
};

export default LoadingScreen;
