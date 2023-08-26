"use client"

import { useEffect, useLayoutEffect } from 'react';
import { Themes } from '../theme.types';
import { useListenPrefersChange } from './useListenPrefersChange';

type Props = {
    initialTheme: Themes,
    theme: Themes,
    setTheme: (theme: Themes) => void,
}

/**
 * useEffects to apply theme changes and avoid useEffects in Principal Components
 */
export const useApplyTheme = ({ initialTheme = Themes.dark, theme = Themes.dark, setTheme }: Props) => {
    const themePrefer = useListenPrefersChange();

    useEffect(() => setTheme(initialTheme), [initialTheme, setTheme]);

    useEffect(() => setTheme(themePrefer), [setTheme, themePrefer]);

    useEffect(() => {
        const newTheme = theme === Themes.dark ? Themes.dark : Themes.light;
        document.documentElement.classList.remove(`${Themes.dark}`);
        document.documentElement.classList.remove(`${Themes.light}`);
        document.documentElement.classList.add(newTheme);
    }, [theme]);

    return theme;
};
