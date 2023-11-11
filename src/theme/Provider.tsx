"use client"

import { ReactNode, useCallback } from "react"
import { useGetInitialTheme } from "./hooks/useGetInitialTheme";
import { Themes } from "./theme.types";
import { useApplyTheme } from "./hooks/useApplyTheme";
import { useAppDispatch, useAppSelector } from "@/hooks/state/useStateTypes";
import { changeThemeA } from "@/store/reducers/theme/themeSlice";
import { NextUIProvider } from '@nextui-org/react'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    /* const initialTheme = useGetInitialTheme();
    const userTheme = useAppSelector(state => state.theme.value);
    const dispatch = useAppDispatch(); */

    /* const changeThemeFirstTime = useCallback((theme: Themes) => {
        dispatch(changeThemeA(theme));
    }, [dispatch]);
 */
    /* useApplyTheme({ initialTheme, theme: userTheme, setTheme: changeThemeFirstTime }); */
    // const themeMui = useMemo(() => createTheme(getDesignTokens(theme)), [theme]);

    return (
        <>
            <NextUIProvider>
                {children}
            </NextUIProvider>
        </>
    )
}
