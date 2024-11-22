import { useEffect, useState } from "react";

//returns the dimensions of the current device
const useDimension = () => {
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const updateDimension = () => {
        const { innerWidth, innerHeight } = window;
        setDimension({ width: innerWidth, height: innerHeight });
    };

    useEffect(() => {
        updateDimension();

        window.addEventListener("resize", updateDimension);

        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, []);
    return dimension;
};

export default useDimension;