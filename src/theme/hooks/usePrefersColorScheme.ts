import { useEffect, useState } from 'react';
import { Themes } from '../theme.types';

/**
 * Update every time that the user changes their preferred color scheme
 */
export const usePrefersColorScheme = () => {
    const [value, setValue] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setValue(mediaQuery.matches);
    }, []);

    return value ? Themes.dark : Themes.light;
};
