"use client"

import { ReactNode, useCallback, useState } from "react"
import { useGetInitialTheme } from "./hooks/useGetInitialTheme";
import { Themes } from "./theme.types";
import { useApplyTheme } from "./hooks/useApplyTheme";
import { useChangeTheme } from "./hooks/useChangeTheme";
import { useAppDispatch, useAppSelector } from "@/hooks/state/useStateTypes";
import { changeThemeA } from "@/store/reducers/theme/themeSlice";


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const initialTheme = useGetInitialTheme();
    const userTheme = useAppSelector(state => state.theme.value);
    const dispatch = useAppDispatch();

    const changeThemeFirstTime = useCallback((theme: Themes) => {
        dispatch(changeThemeA(theme));
    }, [dispatch]);

    useApplyTheme({ initialTheme, theme: userTheme, setTheme: changeThemeFirstTime });
    // const themeMui = useMemo(() => createTheme(getDesignTokens(theme)), [theme]);

    return (
        <>
            {children}
        </>
    )
}
