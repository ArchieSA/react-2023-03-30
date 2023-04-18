import {useEffect, useState} from "react";

export const useActiveIndex = (prefix = "", initialIndex = 0) => {

    const nameStorage = prefix + "ActiveIndex";
    const [activeIndex, setActiveIndex] = useState(initialIndex);

    const setActiveIndexWithCache = (index) => {
        setActiveIndex(index);
        localStorage.setItem(nameStorage, index);
    };

    useEffect(() => {
        const savedActiveIndex = localStorage.getItem(nameStorage);

        if (savedActiveIndex) {
            setActiveIndex(savedActiveIndex);
        }
    }, [activeIndex]);

    return [activeIndex, setActiveIndexWithCache];
}