import { viewTourLocalS } from "@/utils/constant";
import { getValueFromStorage, removeOverflowInBody } from "@/utils/util";
import { useEffect, useState } from "react";

export const useTourViewed = () => {
    const [tourViewed, setTourViewed] = useState(false);
    useEffect(() => {
        const { value } = getValueFromStorage(viewTourLocalS);

        if (value === 'true')
            setTourViewed(true);
    }, []);

    const finishTour = () => {
        localStorage.setItem(viewTourLocalS, JSON.stringify(true));
        removeOverflowInBody();
        setTourViewed(true);
    }

    return {
        tourViewed,
        finishTour
    }
}